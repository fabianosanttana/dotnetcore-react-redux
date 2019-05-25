using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeRentCar.Data;
using WeRentCar.Entities;

namespace WeRentCar.Controllers
{
    [Route("api/reservation")]
    public class ReservationController : Controller
    {
        private readonly DatabaseContext _db = new DatabaseContext();

        [HttpPost("BookCar")]
        public async Task<ActionResult<Car>> BookCar([FromBody]Reservation _reservation)
        {
            var car = _db.Cars.Where(obj => obj.CarID == _reservation.CarID).FirstOrDefault();
            car.RentedDays += (_reservation.ReturnDate - _reservation.PickupDate).TotalDays;
            car.Available = false;
            await _db.AddAsync<Reservation>(_reservation);
            _db.Update<Car>(car);
            await _db.SaveChangesAsync();
            return Ok(car);
        }

        [HttpPut("ReturnCar")]
        public async Task<ActionResult<Car>> ReturnCar([FromBody]Car _car)
        {
            _db.Update<Car>(_car);
            await _db.SaveChangesAsync();
            return Ok(_car);
        }

        [HttpGet("GetRentalCars")]
        public IEnumerable<Car> GetRentalCars()
        {
            return _db.Cars.Where(obj => !obj.Available).ToList();
        }
    }
}