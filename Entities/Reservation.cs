using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeRentCar.Entities {
    public class Reservation {
        public int ResertavionID { get; set; }
        [ForeignKey("CarID")]
        public int CarID { get; set; }
        public Car Car { get; set; }
        [ForeignKey("CustomerID")]
        public int CustomerID { get; set; }
        public Customer Customer { get; set; }
        public double Amount { get; set; }
        public DateTime PickupDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}