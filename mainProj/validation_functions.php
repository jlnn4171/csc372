<?php

function validate_text_input($input, $min_length, $max_length) {
    $length = strlen($input);
    if ($length < $min_length || $length > $max_length) {
        return 'Text input must be between ' . $min_length . ' and ' . $max_length . ' characters.';
    }
    return '';
}

function validate_number_input($input, $min_value, $max_value) {
    if (!is_numeric($input) || $input < $min_value || $input > $max_value) {
        return 'Please enter a valid phone number.';
    }
    return '';
}

function validate_option($input, $valid_options) {
    if (!in_array($input, $valid_options)) {
        return 'Please select a valid option.';
    }
    return '';
}

?>
