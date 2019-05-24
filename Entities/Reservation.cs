using System;
using System.ComponentModel.DataAnnotations;
namespace WeRentCar.Entities {
    public class Reservation {
        [Key]
        public int ResertavionID { get; set; }
        public int CarID { get; set; }
        public virtual Car Car { get; set; }
        public int CustomerID { get; set; }
        public virtual Customer Customer { get; set; }
        public double Amount { get; set; }
        public DateTime PickupDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}