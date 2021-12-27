/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 580);
/******/ })
/************************************************************************/
/******/ ({

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ }),

/***/ 581:
/***/ (function(module, exports) {

/**
 * Author: Web development team
 * Version: 1.0.0
 * ============================
 *
 * This file user for all JS
 * in staff personal info,
 * Function, Variable, ...
 */

/**
 * Date picker
 *
 * This function use on form create and update.
 * ============================================
 */
var get_datepicker = function get_datepicker() {
    $(".dob").each(function () {
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-M-yy',
            yearRange: "-130:+0",
            defaultDate: '-18yr',
            maxDate: '+0d'
        });
    });
    $(".dob_guarantor").each(function () {
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-M-yy',
            yearRange: "-130:+0",
            defaultDate: '-18yr',
            maxDate: '+0d',
            onSelect: function onSelect(value, ui) {
                var _this = this;

                var today = new Date();
                var dob = new Date(value);
                var age = today.getTime() - dob.getTime();
                age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
                if (age < 18) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "He/She less than 18 year old!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, sure!'
                    }).then(function (result) {
                        if (result.value) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'He/She less than 18 year old.',
                                type: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            $(_this).val("");
                        }
                    });
                } else if (age > 60) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "He/She greater than 60 year old!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, sure!'
                    }).then(function (result) {
                        if (result.value) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'He/She greater than 60 year old.',
                                type: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            $(_this).val("");
                        }
                    });
                }
            }
        });
    });
    $(".start_date").each(function () {
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-M-yy',
            yearRange: "-70:+70",
            onSelect: function onSelect(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate());
                $(".end_date").datepicker("option", "minDate", dt);
            }
        });
    });
    $(".end_date").each(function () {
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-M-yy',
            yearRange: "-70:+70",
            onSelect: function onSelect(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate());
                $(".start_date").datepicker("option", "maxDate", dt);
            }
        });
    });
};

/**
 * =====================================
 * Add date-picker to action button MORE
 * =====================================
 *
 * @param parentOfSource : string class name (.parent)
 * @param buttonRemove : string class name (.btn-remove)
 * @param destinationClass : string class name (start_date, end_date)
 * @constructor
 */
var DatepickerAddMoreInfo = function DatepickerAddMoreInfo(parentOfSource, childrenSource, buttonRemove) {
    for (var _len = arguments.length, destinationClass = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        destinationClass[_key - 3] = arguments[_key];
    }

    var clone = $(parentOfSource).children().find(childrenSource).first().clone(false);
    clone.find("input[type=text], select, textarea").val('');
    clone.appendTo($(childrenSource).parent("form"));

    $.each(destinationClass, function (index, value) {
        clone.find("." + value).removeClass('hasDatepicker').removeAttr('id').datepicker().attr('class', 'form-control ' + value);
    });

    get_datepicker();

    var num_of_child = $(parentOfSource).children().find('hr').length;
    if (num_of_child > 1) {
        $(buttonRemove).removeClass('hidden');
    }
};

/**
 * =======================================
 * Add date-picker to action button REMOVE
 * =======================================
 *
 * @param buttonRemove : string class name (.buttonRemove)
 * @param parentOfSource : string class name (.parentOfSource)
 * @param childrenSource : string class name (.childrenSource)
 * @constructor
 */
var RemoveInfo = function RemoveInfo(buttonRemove, parentOfSource, childrenSource) {
    $(parentOfSource).find(childrenSource).last().remove(childrenSource); //remove(childrenSource)
    var num_of_child = $(parentOfSource).children().find('hr').length;

    if (num_of_child <= 1) {
        $(buttonRemove).addClass('hidden');
    }
};

/**
 * Show image user profile when user select file
 *
 * This function use on form create and update.
 * =============================================
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-profile').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
$("#staffProfile").change(function () {
    readURL(this);
});

/**
 * Set up token
 * ===============================
 */
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

/**
 * Create fake data
 * ===============================
 */
function faker() {
    $.ajax({
        url: '/fake-data',
        method: "GET",
        dataType: "JSON",
        data: "",
        success: function success(data) {
            $("#last_name_kh").val(data.lastName);
            $("#last_name_en").val(data.lastName);
            $("#first_name_en").val(data.fistName);
            $("#first_name_kh").val(data.fistName);
            $("#gender").val(data.gender);
            $("#id_type").val(data.id_type);
            $("#id_code").val(data.id_number);
            $("#date_of_birth").val(data.dob);
            $("#pob").val(data.pob);
            $("#bank_name").val(data.bank_name);
            $("#bank_acc_number").val(data.bank_acc_number);
            $("#driver_license").val(data.driver_licence);
            $("#height").val(data._height);
            $("#house_no").val(data.house_number);
            $("#street_no").val(data.street_number);
            $("#other_location").val(data._location);
            $("#phone").val(data._phone);
            $("#email").val(data._email);
            $("#emergency_contact").val(data.emergency_contact);
            $("#noted").val(data.noted);
        },
        fail: function fail(err) {
            console.log(err);
        }
    });
}

/**
 * =============================
 * When document loading already
 * =============================
 */
$(document).ready(function () {

    /**
     * Keep the current tab active
     * on page reload in Bootstrap
     * ===========================
     */
    var activeTab;

    $('.nav-tabs a').on('show.bs.tab', function (e) {
        sessionStorage.setItem('activeTab', e.target.hash); // Set sessionStorage variable
    });
    activeTab = sessionStorage.getItem('activeTab') == null ? '#personal_info' : sessionStorage.getItem('activeTab'); // Get sessionStorage variable

    if (activeTab) $('#staff-tabs a[href="' + activeTab + '"]').tab('show'); // Set current tabs when reload page

    // Call function
    get_datepicker();

    /**
     * Add class form-control to input
     * ===============================
     */
    $("input[type=text]").addClass("form-control");
    $("select").addClass("form-control");

    /**
     * Click on button delete
     * ===============================
     */
    $("a.btn-delete").on('click', function () {
        var staff_id = $(this).attr("data-delete");

        Swal.fire({
            title: 'Are you sure?',
            text: "You will delete this record!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                $.ajax({
                    url: "/staff-personal-info/destroy",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        staff_id: staff_id
                    },
                    success: function success(data) {
                        if (data.success == 1) {
                            Swal.fire({
                                title: "Successful",
                                showConfirmButton: false,
                                type: "success",
                                timer: 1500
                            }).then(function () {
                                window.location.reload();
                            });
                        }
                    },
                    fail: function fail(err) {
                        console.log(err);
                    }
                });
            }
        });
    }); // End button delete


    /**
     *        Click button MORE
     * ===============================
     */
    $(".btn-more-education").on('click', function () {
        DatepickerAddMoreInfo('.parent-education', '.child-education', '.btn-remove-education', 'start_date', 'end_date', 'dob');
        var i = $(".child-education").length;
        $(".num_row").val(i);
    });

    $(".btn-more-training").on('click', function () {
        DatepickerAddMoreInfo('.parent-training', '.child-training', '.btn-remove-training', 'start_date', 'end_date', 'dob');
        var i = $(".child-training").length;
        $(".num_row").val(i);
    });

    $(".btn-more-experience").on('click', function () {
        DatepickerAddMoreInfo('.parent-experience', '.child-experience', '.btn-remove-experience', 'start_date', 'end_date', 'dob');
        var i = $(".child-experience").length;
        $(".num_row").val(i);
    });

    $(".btn-more-spouse").on('click', function () {
        DatepickerAddMoreInfo('.parent-spouse', '.child-spouse', '.btn-remove-spouse', 'start_date', 'end_date', 'dob');
        var i = $(".parent-spouse").find(".child-spouse").length;
        $(".num_row").val(i);
    });

    $(".btn-more-guarantor").on('click', function () {
        DatepickerAddMoreInfo('.parent-guarantor', '.child-guarantor', '.btn-remove-guarantor', 'start_date', 'end_date', 'dob_guarantor');
        var i = $(".child-guarantor").length;
        $(".num_row").val(i);
    });

    $(".btn-more-document").on('click', function () {
        DatepickerAddMoreInfo('.parent-document', '.child-document', '.btn-remove-document', 'start_date');
        var i = $(".child-document").length;
        $(".num_row").val(i);

        var num = $('.child-document').length;
        if (num > 1) {
            $('.child-document').find(".btn-remove-doc").removeClass('hidden');
        }
    });

    /**
     *         Click button REMOVE
     * ===============================
     */
    $(".btn-remove-education").on('click', function () {
        RemoveInfo('.btn-remove-education', '.parent-education', '.child-education');
        var i = $(".child-education").length;
        $(".num_row").val(i);
    });

    $(".btn-remove-training").on('click', function () {
        RemoveInfo('.btn-remove-training', '.parent-training', '.child-training');
        var i = $(".child-training").length;
        $(".num_row").val(i);
    });
    $(".btn-remove-experience").on('click', function () {
        RemoveInfo('.btn-remove-experience', '.parent-experience', '.child-experience');
        var i = $(".child-experience").length;
        $(".num_row").val(i);
    });
    $(".btn-remove-spouse").on('click', function () {
        RemoveInfo('.btn-remove-spouse', '.parent-spouse', '.child-spouse');
        var i = $(".parent-spouse").find(".child-spouse").length;
        $(".num_row").val(i);
    });
    $(".btn-remove-guarantor").on('click', function () {
        RemoveInfo('.btn-remove-guarantor', '.parent-guarantor', '.child-guarantor');
        var i = $(".child-guarantor").length;
        $(".num_row").val(i);
    });
    // $(".btn-remove-document").on('click', function () {
    //     RemoveInfo('.btn-remove-document', '.parent-document', '.child-document');
    // });

    $("body").on('click', '.btn-remove-doc', function () {
        $(this).parent().parent().remove();
        var num = $('.child-document').length;
        $(".num_row").val(num);

        if (num <= 1) {
            $('.child-document').find(".btn-remove-doc").addClass('hidden');
        }
    });

    /**
     * Get probation end date
     */
    $("#probation_duration").on('change', function (e) {
        e.preventDefault();

        var employment_date = $('#employment_date').datepicker({ dateFormat: 'd,M,yyyy' }).val();
        var duration = parseInt($(this).val());

        $.ajax({
            url: "/probation-end-date",
            method: "post",
            dataType: "json",
            data: {
                employment_date: employment_date,
                duration: duration
            },
            success: function success(data) {
                $("#probation_end_date").val("");
                $("#probation_end_date").val(data.end_date);
            },
            fail: function fail(err) {
                console.log(err);
            }
        });
    });
}); // End document.ready


// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function keyup() {
        formatCurrency($(this));
    },
    blur: function blur() {
        formatCurrency($(this), "blur");
    }
});

function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input_val = input.val();

    // don't validate empty input
    if (input_val === "") {
        return;
    }

    // original length
    var original_len = input_val.length;

    // initial caret position
    var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = left_side + "." + right_side;
        // input_val = "$" + left_side + "." + right_side;
    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = input_val;
        // input_val = "$" + input_val;

        // final formatting
        if (blur === "blur") {
            input_val += ".00";
        }
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}

/***/ })

/******/ });