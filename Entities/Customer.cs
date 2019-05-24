using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeRentCar.Entities {

    public class Customer {
        public int CustomerID { get; set; }
        public string Ssn { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public Int64 PhoneNumber { get; set; }
        public string Email { get; set; }
    }

}