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
        //===========================
        // Public Methods
        //===========================
        setRules : function (fieldName, config) {
            //
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
