$(document).ready(function() {
    var messages = {
        ku: {
            firstNameRequired: "پێتڤیە ناڤێ خو بنڤیسی",
            firstNameMinLength: "پێتڤیە ناڤ ژ ٣ پیتان کێمتر نەبیت",
            lastNameRequired: "پێتڤیە ناڤێ بابێ خو بنڤیسی",
            lastNameMinLength: "پێتڤیە ناڤ ژ ٣ پیتان کێمتر نەبیت",
            emailRequired: "پێتڤیە ئیمەیڵێ خو بنڤیسی",
            emailInvalid: "ئەڤ ئیمەیڵە نەیێ گونجایە",
            phoneRequired: "پێتڤیە ژمارا خو بنڤیسی",
            phoneLength: "نابیت ژ 7 ژماران کێمتر بنڤیسی",
            textAreaRequired: "پێتڤیە ڤێ خانێ پڕ بکەی",
        },
        ko: {
            firstNameRequired: "پێویستە ناوی یەکەم بینوسی",
            firstNameMinLength: "ناوی یەکەم دەبێت کەمتر نەبێت لە ٣ پیت",
            lastNameRequired: "پێویستە ناوی دووەم بینوسی",
            lastNameMinLength: "ناوی کۆتایی دەبێت کەمتر نەبێت لە ٣ پیت",
            emailRequired: "پێویستە ئیمەیڵەکەت بینوسی",
            emailInvalid: " ئەم ئیمەیڵە گونجاو نییە",
            phoneRequired: "پێویستە ژمارەکەت بینوسی",
            phoneLength: "نابیێت لە ٧ ژمارە کەمتر بێت",
            textAreaRequired: "ئەم خانایە پڕ بکەرەوە",
        },
        ar: {
            firstNameRequired: "اسم الأول مطلوب",
            firstNameMinLength: "يجب أن يكون الاسم الأول مكونًا من ٣ أحرف على الأقل",
            lastNameRequired: "اسم الأخير مطلوب",
            lastNameMinLength: "يجب أن يكون الاسم الأخير مكونًا من ٣ أحرف على الأقل",
            emailRequired: "البريد الإلكتروني مطلوب",
            emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صالح",
            phoneRequired: "رقم الهاتف مطلوب",
            phoneLength: "يجب أن يكون رقم الهاتف ٧ أرقام على الأقل",
            textAreaRequired: "املأ هذا الحقل"
        },
        en: {
            firstNameRequired: "First name is required",
            firstNameMinLength: "First name must be at least 3 characters long",
            lastNameRequired: "Last name is required",
            lastNameMinLength: "Last name must be at least 3 characters long",
            emailRequired: "Email address is required",
            emailInvalid: "Please enter a valid email address",
            phoneRequired: "Phone number is required",
            phoneLength: "Phone number must be at least 7 digits",
            textAreaRequired: "Fill in this field",
        }
    };

    var successMessages = {
        ku: "داخازیا تە بسەرکەفتیانە هاتە تومارکرن!",
        ko: "داواکاریەکەت بە سەرکەوتویی نێردرا!",
        ar: "تم إرسال النموذج بنجاح!",
        en: "Form submitted successfully!"
    };
    var successIcons = {
        ku: "✓",
        ko: "✓",
        ar: "✓", 
        en: "✓"
    };
    var loadingMessage = {
        ku: "چاڤەرێبە...",
        ko: "چاوەرێکە...",
        ar: "انتظر...",
        en: "Loading..."
    }

    var selectedLanguage = localStorage.getItem('language') || 'ku';

    // Language selection
    $('button[data-lang]').on('click', function() {
        selectedLanguage = $(this).data('lang');
        localStorage.setItem('language', selectedLanguage); // Save language selection
        updateErrors(); // Update errors based on new language
    });

    // Form submission
    $('#myForm').on('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    // Clear form fields and errors
    $('#btnDelete').on('click', function(){
        clearErrors();
    });

    // Phone number input filtering
    $('#phone').on('input', function() {
        var value = $(this).val();
        $(this).val(value.replace(/[^0-9+ ٠-٩]/g, ''));
    });

    // Email validation
    function isValidEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Clear all form fields and error messages
    function clearErrors() {
        $('#firstName').val('');
        $('#lastName').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#textArea').val('');

        $('#firstNameError').text('');
        $('#lastNameError').text('');
        $('#emailError').text('');
        $('#phoneError').text('');
        $('#textAreaError').text('');
    }

    // Form validation
    function validateForm() {
        var isValid = true;

        var firstName = $('#firstName').val().trim();
        if (firstName === "") {
            $('#firstNameError').text(messages[selectedLanguage].firstNameRequired);
            isValid = false;
        } else if (firstName.length < 3) {
            $('#firstNameError').text(messages[selectedLanguage].firstNameMinLength);
            isValid = false;
        }

        var lastName = $('#lastName').val().trim();
        if (lastName === "") {
            $('#lastNameError').text(messages[selectedLanguage].lastNameRequired);
            isValid = false;
        } else if (lastName.length < 3) {
            $('#lastNameError').text(messages[selectedLanguage].lastNameMinLength);
            isValid = false;
        }

        var email = $('#email').val().trim();
        if (email === "") {
            $('#emailError').text(messages[selectedLanguage].emailRequired);
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#emailError').text(messages[selectedLanguage].emailInvalid);
            isValid = false;
        }

        var phone = $('#phone').val().trim();
        if (phone === "") {
            $('#phoneError').text(messages[selectedLanguage].phoneRequired);
            isValid = false;
        } else if (phone.length < 7) {
            $('#phoneError').text(messages[selectedLanguage].phoneLength);
            isValid = false;
        }

        var textArea = $('#textArea').val().trim();
        if (textArea === "") {
            $('#textAreaError').text(messages[selectedLanguage].textAreaRequired);
            isValid = false;
        }

        if (isValid) {
            submitForm();
        }
    }

    // Update error messages on language change
    function updateErrors() {
        $('#firstNameError').text(function() {
            var firstName = $('#firstName').val().trim();
            if (firstName === "") {
                return messages[selectedLanguage].firstNameRequired;
            } else if (firstName.length < 3) {
                return messages[selectedLanguage].firstNameMinLength;
            }
            return '';
        });

        $('#lastNameError').text(function() {
            var lastName = $('#lastName').val().trim();
            if (lastName === "") {
                return messages[selectedLanguage].lastNameRequired;
            } else if (lastName.length < 3) {
                return messages[selectedLanguage].lastNameMinLength;
            }
            return '';
        });

        $('#emailError').text(function() {
            var email = $('#email').val().trim();
            if (email === "") {
                return messages[selectedLanguage].emailRequired;
            } else if (!isValidEmail(email)) {
                return messages[selectedLanguage].emailInvalid;
            }
            return '';
        });

        $('#phoneError').text(function() {
            var phone = $('#phone').val().trim();
            if (phone === "") {
                return messages[selectedLanguage].phoneRequired;
            } else if (phone.length < 7) {
                return messages[selectedLanguage].phoneLength;
            }
            return '';
        });

        $('#textAreaError').text(function() {
            var textArea = $('#textArea').val().trim();
            if (textArea === "") {
                return messages[selectedLanguage].textAreaRequired;
            }
            return '';
        });
    }
    
    // Field-level validation on input
    $('#firstName, #lastName, #email, #phone, #textArea').on('input', function() {
        validateField($(this));
    });

    // Validate a single field
    function validateField($field) {
        var id = $field.attr('id');
        var value = $field.val().trim();
        var errorId = '#' + id + 'Error';
        $(errorId).text('');

        switch (id) {
            case 'firstName':
                if (value === "") {
                    $(errorId).text(messages[selectedLanguage].firstNameRequired);
                } else if (value.length < 3) {
                    $(errorId).text(messages[selectedLanguage].firstNameMinLength);
                }
                break;
            case 'lastName':
                if (value === "") {
                    $(errorId).text(messages[selectedLanguage].lastNameRequired);
                } else if (value.length < 3) {
                    $(errorId).text(messages[selectedLanguage].lastNameMinLength);
                }
                break;
            case 'email':
                if (value === "") {
                    $(errorId).text(messages[selectedLanguage].emailRequired);
                } else if (!isValidEmail(value)) {
                    $(errorId).text(messages[selectedLanguage].emailInvalid);
                }
                break;
            case 'phone':
                if (value === "") {
                    $(errorId).text(messages[selectedLanguage].phoneRequired);
                } else if (value.length < 7) {
                    $(errorId).text(messages[selectedLanguage].phoneLength);
                }
                break;
            case 'textArea':
                if (value === "") {
                    $(errorId).text(messages[selectedLanguage].textAreaRequired);
                }
                break;
        }
    }

    function showSuccessPopup() {
        $('#successIcon').text(successIcons[selectedLanguage]).css('display', 'block');
        $('#successMessage').text(successMessages[selectedLanguage]);
        $('#successPopup').addClass('show');
        setTimeout(function() {
            $('#successPopup').removeClass('show');
        }, 3000);
    }

    function submitForm() {
        // Show loading indicator
        $('#successPopup').addClass('show');
        $('#successIcon').css('display', 'none');
        $('#successMessage').text(loadingMessage[selectedLanguage]);
    
        $.ajax({
            url: 'https://formspree.io/f/mkgwajpk',
            method: 'POST',
            data: {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                textArea: $('#textArea').val()
            },
            success: function() {
                showSuccessPopup();
                clearErrors();
            },
            error: function() {
                showSuccessPopup();
                clearErrors();
            }
        });
    }   
});
