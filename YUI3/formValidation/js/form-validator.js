/*global YUI, window */
/**
 * Form Validator
 *
 * @module mui
 * @requires base
 */
YUI.add("form-validator", function (Y) {

    var MODULE_ID = "FormValidator";

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
            Y.log("initializer() is executed.", "info", MODULE_ID);
        	this.formName = config.formName;
            this.formElement = document.forms[this.formName];
            this.formNode = Y.one(this.formElement);

            // use this FormValidator as context in event handlers
            this.formNode.on("submit", Y.bind(this._formSubmitHandler, this));
        },
        _formSubmitHandler : function (e) {
            alert(this.formName);
            e.halt();
        },
        _showTipsHandler : function (message) {
            var node = Y.one(this),
                nodeName = node.get("name"),
                formNode = node.ancestor("form"),
                messageNode;
            if (!formNode || !nodeName) {
                Y.log("formNode or nodeName missing, skip show tip.", "warn");
                return;
            }
            messageNode = formNode.one("." + nodeName + "-message");
            if (!messageNode) {
                Y.log("messageNode missing, skip show tip.", "warn");
                return;
            }
            //TODO: need tuning for performance issue
            messageNode.removeClass("message-error").removeClass("message-ok").removeClass("message-init");
            messageContentNode = messageNode.one("p");
            if (!messageContentNode) {
                Y.log("creating messageContentNode");
                messageContentNode = Y.Node.create("<p></p>");
                messageNode.insert(messageContentNode);
            }
            messageContentNode.set("innerHTML", message);
        },
        _validationHandler : function (validators, eventType) {
            var breakLoop = false;
            Y.each(validators, function (validator) {
                if (breakLoop) {
                    return;
                }
                if (Y.Array.indexOf(validator.on.split(","), eventType) === -1) {
                    return;
                }
                Y.log("checking : " + validator.rule);
            });
        },
        //===========================
        // Public Methods
        //===========================
        setRules : function (fieldName, config) {
            // DEBUG only
            if (fieldName !== "email") {
                return;
            }

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
                Y.one(fieldElement).on(tips.on, Y.bind(this._showTipsHandler, fieldElement, tips.message));
            }
            // bind validators
            validators = config.validators;
            if (validators && Y.Lang.isArray(validators)) {
                Y.each(validators, function (validator) {
                    validator.on = validator.on || "blur";
                    Y.each(validator.on.split(","), function (eventType) {
                        if (Y.Array.indexOf(eventTypes, eventType) === -1) {
                            eventTypes.push(eventType);
                        }
                    });
                });
                Y.each(eventTypes, function (eventType) {
                    // lost focus of 'this', use 'self' instead
                    Y.one(fieldElement).on(eventType, Y.bind(self._validationHandler, fieldElement, validators, eventType));
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
