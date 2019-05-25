using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeRentCar.Data;
using WeRentCar.Entities;

namespace WeRentCar.Controllers
{
    [Route("api/car")]
    public class CarController : Controller
    {
        private readonly DatabaseContext _db = new DatabaseContext();

        [HttpGet("GetAvailableCars")]
        public IEnumerable<Car> GetAvailableCars()
        {
            return _db.Cars.Where(obj => obj.Available).ToList();
        }

        [HttpGet("GetRentalCars")]
        public IEnumerable<Car> GetRentalCars()
        {
            return _db.Cars.Where(obj => !obj.Available).ToList();
        }

        [HttpGet("GetCar/{id}")]
        public ActionResult<Car> GetById(int id)
        {
            var _car = (from obj in _db.Cars where obj.CarID == id select obj).FirstOrDefault();

            if (_car is null)
                return NotFound();

            return _car;
        }

        [HttpPost("AddCar")]
        public async Task<ActionResult<Car>> AddCar([FromBody]Car _car)
        {
            await _db.AddAsync<Car>(_car);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = _car.CarID }, _car);
        }

        [HttpPut("UpdateCar")]
        public async Task<ActionResult<Car>> UpdateCar([FromBody]Car _car)
        {
            _db.Update<Car>(_car);
            await _db.SaveChangesAsync();
            return Ok(_car);
        }

        [HttpDelete("DeleteCar/{id}")]
        public async Task<ActionResult<Car>> DeleteCar(int id)
        {
            var _car = (from obj in _db.Cars where obj.CarID == id select obj).FirstOrDefault();
            _db.Remove<Car>(_car);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}