using System.ComponentModel.DataAnnotations;

namespace WeRentCar.Entities
{

    public class Client
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public int phoneNumber { get; set; }
    }

}