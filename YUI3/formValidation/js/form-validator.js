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

    // Attributes for user.
    Y.mix(FormValidator, {
        NS    : "form-validator",
        NAME  : "form-validator",
        ATTRS : {
        },
        VALIDATORS : {
            ajax : function () {
                return true;
            },
            alpha : function () {
                var filter = /[a-zA-Z]/,
                    result = FormValidator.VALIDATORS.pattern.call(this, filter);
                return result;
            },
            required : function () {
                if (this.value === "") {
                    return false;
                }
                return true;
            },
            matches : function () {
                return true;
            },
            maxLength : function (len) {
                if (this.value.length > len) {
                    return false;
                }
                return true;
            },
            minLength : function (len) {
                if (this.value.length < len) {
                    return false;
                }
                return true;
            },
            numeric : function () {
                var filter = /\d/,
                    result = FormValidator.VALIDATORS.pattern.call(this, filter);
                return result;
            },
            pattern : function (filter) {
                if (filter.test(this.value) === false) {
                    return false;
                }
                return true;
            },
            validEmail : function () {
                var filter = /^([a-z0-9_\-]+)((\.|\+)[a-z0-9_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i,
                    result = FormValidator.VALIDATORS.pattern.call(this, filter);
                return result;
            },
            validPassword : function () {
                var VALIDATORS = FormValidator.VALIDATORS,
                    hasAlpha = VALIDATORS.alpha.call(this),
                    hasNumeric = VALIDATORS.numeric.call(this);
                if (!hasAlpha || !hasNumeric) {
                    return false;
                }
                return true;
            }
        }
    });

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

            // use this FormValidator as context in event handlers
            this.formNode.on("submit", Y.bind(this._formSubmitHandler, this));
        },
        _formSubmitHandler : function (e) {
            // this === this object
            alert(this.formName);
            e.halt();
        },
        _showMessageHandler : function (message, className) {
            // this === formElement
            var node = Y.one(this),
                nodeName = node.get("name"),
                formNode = node.ancestor("form"),
                messageNode,
                classNames,
                newClassNames = [];
            if (!formNode || !nodeName) {
                Y.log("formNode or nodeName missing, skip show tip.", "warn");
                return;
            }
            messageNode = formNode.one("." + nodeName + "-message");
            if (!messageNode) {
                Y.log("messageNode missing, skip show tip.", "warn");
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

        _validationHandler : function (fieldElement, validators, eventType) {
            // this === this object
            var breakLoop = false,
                self = this;
            Y.each(validators, function (validator) {
                // this === validator
                if (breakLoop) {
                    return;
                }
                if (Y.Array.indexOf(validator.on.split(","), eventType) === -1) {
                    return;
                }
                if (Lang.isFunction(validator.rule)) {
                    Y.log("custom rule: " + validator.rule);
                    return;
                }
                var rule = validator.rule,
                    ruleArguments = rule.split(";"),
                    ruleName = ruleArguments.shift(),
                    result;
                if (Lang.isFunction(FormValidator.VALIDATORS[ruleName])) {
                    Y.log("checking : " + ruleName);
                    result = FormValidator.VALIDATORS[ruleName].apply(fieldElement, ruleArguments);
                    if (result === false) {
                        breakLoop = true;
                        validator.className = validator.className || "message-error";
                        self._showMessageHandler.call(fieldElement, validator.message, validator.className);
                        return;
                    }
                } else {
                    Y.log(validator.rule + " not defined yet, skipped!", "warn");
                }
            });
            if (!breakLoop) {
                self._showMessageHandler.call(fieldElement, "OK", "message-ok");
                return;
            }
        },

        //===========================
        // Public Methods
        //===========================
        setRules : function (fieldName, config) {
            var fieldElement, tips, validators, eventTypes = [], self = this;
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
                Y.one(fieldElement).on(tips.on, Y.bind(this._showMessageHandler, fieldElement, tips.message, tips.className));
            }
            // bind validators
            validators = config.validators;
            if (validators && Y.Lang.isArray(validators)) {
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
                        Y.one(fieldElement).on(eventType, Y.bind(self._validationHandler, self, fieldElement, validators, eventType));
                    }
                });
            }
        },
        /**
         * Say hello to the world.
         *
         * @method initializer
         * @private
         * @param {Object} attrs attribute object
         */
        sayHello : function () {
            alert("Hello world");
        },
        getForm : function () {
            alert(this.formName);
        }
    });

    Y.FormValidator = FormValidator;
    window.Y = Y;

}, "0.0.1", {"requires" : ["base", "node"]});
