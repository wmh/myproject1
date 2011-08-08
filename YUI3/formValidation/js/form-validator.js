/*global YUI, window */
/**
 * Form Validator
 *
 * @module mui
 * @requires base
 */
YUI.add("form-validator", function (Y) {

    var Lang = Y.Lang,
        MODULE_ID = "FormValidator";

    /**
     * Form Validator
     *
     * @constructor
     * @class FormValidator
     * @param form_name {String} The name attribute of the HTML form.
     * @param config {Object} Configuration.
     */
    function FormValidator(config) {
        FormValidator.superclass.constructor.apply(this, arguments);
    }

    FormValidator.NS    = "form-validator";
    FormValidator.NAME  = "form-validator";
    FormValidator.ATTRS = {};
    FormValidator.VALIDATORS = {
        ajax : function (e) {
            if (this.value === "") {
                return null;
            }
            return true;
        },
        alpha : function (e) {
            if (this.value === "") {
                return null;
            }
            var filter = /[a-zA-Z]/,
                result = FormValidator.VALIDATORS.pattern.call(this, filter);
            return result;
        },
        matches : function (anotherFieldName, e) {
            // this === fieldElement
            if (this.value === "") {
                return null;
            }
            var node = Y.one(this),
                formNode = node.ancestor("form"),
                anotherFieldNode = formNode.one("[name=" + anotherFieldName + "]");
            if (!anotherFieldNode) {
                Y.log("Another field '" + anotherFieldName + "' is not exist!", "warn", MODULE_ID);
                return true;
            }
            if (anotherFieldNode.get("value") !== node.get("value")) {
                return false;
            }
            return true;
        },
        maxLength : function (len, e) {
            if (this.value === "") {
                return null;
            }
            if (this.value.length > parseInt(len, 10)) {
                return false;
            }
            return true;
        },
        minLength : function (len, e) {
            if (this.value === "") {
                return null;
            }
            if (this.value.length < parseInt(len, 10)) {
                return false;
            }
            return true;
        },
        numeric : function (e) {
            if (this.value === "") {
                return null;
            }
            var filter = /\d/,
                result = FormValidator.VALIDATORS.pattern.call(this, filter);
            return result;
        },
        pattern : function (filter, e) {
            if (this.value === "") {
                return null;
            }
            if (Lang.isString(filter)) {
                var params = filter.match(/^\/(((\\\/)|[^\/])*)\/(((\\\/)|[^\/])*)$/),
                    rePattern,
                    reAttributes;
                Y.log(params);
                if (params.length == 7) {
                    rePattern = params[1];
                    reAttributes = params[4];
                    try {
                        filter = new RegExp(rePattern, reAttributes);
                    } catch(err) {
                    }
                }
            }
            if (!(filter instanceof RegExp)) {
                Y.log("'" + filter + "' is not valid Regexp pattern.", "warn", MODULE_ID);
                return true;
            }
            if (filter.test(this.value) === false) {
                return false;
            }
            return true;
        },
        required : function (e) {
            if (this.value === "") {
                return false;
            }
            return true;
        },
        trigger : function (anotherFieldName, eventType, e) {
            var node = Y.one(this),
                formNode = node.ancestor("form"),
                anotherFieldNode = formNode.one("[name=" + anotherFieldName + "]");
            if (anotherFieldNode) {
                anotherFieldNode.simulate(eventType);
            }
            //always return true
            return true;
        },
        validEmail : function (e) {
            if (this.value === "") {
                return null;
            }
            var filter = /^([a-z0-9_\-]+)((\.|\+)[a-z0-9_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i,
                result = FormValidator.VALIDATORS.pattern.call(this, filter);
            return result;
        },
        validPassword : function (e) {
            if (this.value === "") {
                return null;
            }
            var VALIDATORS = FormValidator.VALIDATORS,
                hasAlpha = VALIDATORS.alpha.call(this),
                hasNumeric = VALIDATORS.numeric.call(this);
            if (!hasAlpha || !hasNumeric) {
                return false;
            }
            return true;
        }
    };

    // Sandbox methods
    Y.extend(FormValidator, Y.Base, {
        //===========================
        // Private Events
        //===========================
        /**
         * Default width attribute state change handler
         *
         * @method _afterWidthChange
         * @private
         * @param {Event} e The YUI Event.
         */
        _afterWidthChange: function (e) {
            Y.log("_afterWidthChange() is executed.", "info", MODULE_ID);
        },
        //===========================
        // Private Methods
        //===========================
        /**
         * The first executed method when user calls.
         * Make preparation here.
         *
         * @method initializer
         * @private
         * @param {Object} attrs attribute object
         */
        initializer: function (config) {
            Y.log(config.formName + " - initializer() is executed.", "info", MODULE_ID);
        	this.formName = config.formName;
            this.formElement = document.forms[this.formName];
            this.formNode = Y.one(this.formElement);
            this.rules = {};

            // use this FormValidator as context in event handlers
            this.formNode.on("submit", Y.bind(this._formSubmitHandler, this));
        },
        _formSubmitHandler : function (e) {
            // this === this object
            var failed = false,
                rules = this.rules,
                self = this;
            Y.each(rules, function (config, fieldName) {
                var fieldElement = self.formElement.elements[fieldName],
                    result = self._validationHandler.call(self, fieldElement, config.validators, "submit", config.messageContainer, e);
                if (result !== null && result !== true) {
                    failed = true;
                }
            });
            if (failed) {
                e.preventDefault();
                return false;
            }
        },
        _showMessageHandler : function (message, messageContainer, className) {
            // this === fieldElement
            var node = Y.one(this),
                nodeName = node.get("name"),
                formNode = node.ancestor("form"),
                messageNode,
                classNames,
                newClassNames = [];
            if (!formNode || !nodeName) {
                Y.log("formNode or nodeName missing, skip show message.", "warn");
                return;
            }
            messageContainer = messageContainer || "." + nodeName + "-message";
            messageNode = formNode.one(messageContainer);
            if (!messageNode) {
                Y.log("messageNode missing, skip show message.", "warn");
                return;
            }

            // handling classNames
            classNames = messageNode.get("className").split(" ");
            Y.each(classNames, function (val) {
                if (val.indexOf("message-") !== 0) {
                    newClassNames.push(val);
                }
            });
            newClassNames.push(className);
            messageNode.set("className", newClassNames.join(" "));

            messageContentNode = messageNode.one("p");
            if (!messageContentNode) {
                Y.log("creating messageContentNode");
                messageContentNode = Y.Node.create("<p></p>");
                messageNode.insert(messageContentNode);
            }
            messageContentNode.set("innerHTML", message);
        },

        _validationHandler : function (fieldElement, validators, eventType, messageContainer, e) {
            Y.log(e);
            Y.log("_validationHandler(" + eventType + "): " + fieldElement.name);
            // this === this object
            var breakLoop = false,
                self = this,
                showMessage = true;
            Y.each(validators, function (validator) {
                // this === validator
                if (breakLoop) {
                    return;
                }
                validator.on = validator.on || "blur,submit";
                if (Y.Array.indexOf(validator.on.split(","), eventType) === -1) {
                    return;
                }
                var className,
                    guid,
                    message,
                    rule = validator.rule,
                    ruleArguments,
                    ruleName,
                    result;
                if (Lang.isFunction(rule)) {
                    // converting custom rule
                    guid = Y.guid();
                    FormValidator.VALIDATORS[guid] = rule;
                    rule = guid;
                }
                ruleArguments = rule.split(";");
                ruleArguments.push(e);
                ruleName = ruleArguments.shift();
                if (Lang.isFunction(FormValidator.VALIDATORS[ruleName])) {
                    Y.log("checking : " + ruleName);
                    result = FormValidator.VALIDATORS[ruleName].apply(fieldElement, ruleArguments);
                    if (result === null) {
                        showMessage = false;
                        return;
                    } else if (result !== true) {
                        breakLoop = true;
                        validator.className = validator.className || "message-error";
                        if (result === false) {
                            message = validator.message;
                        } else {
                            Y.log("error result: " + result);
                            message = validator.message[result];
                        }
                        self._showMessageHandler.call(fieldElement, message, messageContainer || validator.messageContainer, validator.className);
                        return;
                    }
                } else {
                    Y.log(validator.rule + " not defined yet, skipped!", "warn");
                }
            });
            if (!breakLoop && showMessage) {
                self._showMessageHandler.call(fieldElement, "OK", messageContainer, "message-ok");
                return true;
            }
            return false;
        },

        //===========================
        // Public Methods
        //===========================
        setRules : function (fieldName, config) {
            var fieldElement,
                tips,
                validators,
                eventTypes = [],
                self = this;
            config = config || {};

            // check node
            fieldElement = this.formElement.elements[fieldName];
            if (!fieldElement) {
                Y.log("field '" + fieldName + "' is not exist!", "error", MODULE_ID);
                return;
            }

            // bind tips
            tips = config.tips;
            if (tips && tips.message) {
                // show tips on focus as default
                tips.on = tips.on || "focus";
                tips.className = tips.className || "message-tips";
                tips.messageContainer = tips.messageContainer || config.messageContainer;
                Y.one(fieldElement).on(tips.on, Y.bind(this._showMessageHandler, fieldElement, tips.message, tips.messageContainer, tips.className));
            }
            // bind validators
            validators = config.validators;
            if (validators && Y.Lang.isArray(validators)) {
                this.rules[fieldName] = config;
                Y.each(validators, function (validator) {
                    validator.on = validator.on || "blur,submit";
                    Y.each(validator.on.split(","), function (eventType) {
                        if (Y.Array.indexOf(eventTypes, eventType) === -1) {
                            eventTypes.push(eventType);
                        }
                    });
                });
                Y.each(eventTypes, function (eventType) {
                    // lost focus of 'this', use 'self' instead
                    if (eventType !== "submit") {
                        Y.one(fieldElement).on(eventType, Y.bind(self._validationHandler, self, fieldElement, validators, eventType, config.messageContainer));
                    }
                });
            }
        },
        getForm : function () {
            return this.formName;
        }
    });

    Y.FormValidator = FormValidator;
    window.Y = Y;

}, "0.0.1", {"requires" : ["base", "node", "node-event-simulate"]});
