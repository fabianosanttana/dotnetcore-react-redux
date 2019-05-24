using System;
using System.ComponentModel.DataAnnotations;

namespace WeRentCar.Entities {

    public class Customer {
        [Key]
        public int CustomerID { get; set; }
        [Key]
        public string Ssn { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public Int64 PhoneNumber { get; set; }
    }

}