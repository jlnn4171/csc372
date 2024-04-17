<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Booking System</title>
</head>

<body>
    <?php

    class Appointment {
        // Properties
        public $dateTime;
        public $customerName;
        public $contactNum;
        public $nailTech;
        public $services;
        public $status;

        // Constructor
        public function __construct($dateTime, $customerName, $contactNum, $nailTech, $services, $status) {
            $this->dateTime = $dateTime;
            $this->customerName = $customerName;
            $this->contactNum = $contactNum;
            $this->nailTech = $nailTech;
            $this->services = $services;
            $this->status = $status;
        }

        // Getter methods to store
        public function getDateTime() {
            return $this->dateTime;
        }

        public function getCustomerName() {
            return $this->customerName;
        }

        public function getContactNum() {
            return $this->contactNum;
        }

        public function getNailTech() {
            return $this->nailTech;
        }

        public function getServices() {
            return $this->services;
        }

        public function getStatus() {
            return $this->status;
        }

        // Setter method to update value
        public function setStatus($status) {
            $this->status = $status;
        }
    }

    // Create two instances of Appointment
    $appointment1 = new Appointment("04/10/2024 10:00 AM", "Alice Smith", "alice@gmail.com", "Tina", "Manicure, Pedicure", "Unconfirmed");
    $appointment2 = new Appointment("04/21/2024 2:00 PM", "Cadence Brown", "cb@yahoo.com", "Rosemary", "Microblading", "Confirmed");


    ?>
</body>
</html>
