using System.ComponentModel.DataAnnotations;
namespace WeRentCar.Entities {
    public class Car {
        public int CarID { get; set; }
        public string Brand { get; set; }
        public bool Available { get; set; }
        public string Notes { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public double DailyPrice { get; set; }
        public string Model { get; set; }
        public double RentedDays { get; set; }
    }
}