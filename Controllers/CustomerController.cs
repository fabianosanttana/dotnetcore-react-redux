using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeRentCar.Data;
using WeRentCar.Entities;

namespace WeRentCar.Controllers
{
    [Route("api/customer")]
    public class CustomerController : Controller
    {
        private readonly DatabaseContext _db = new DatabaseContext();

        [HttpGet("GetCustomer")]
        public IEnumerable<Customer> GetCustomer()
        {
            return _db.Customers.ToList();
        }

        [HttpGet("GetCustomer/{id}")]
        public ActionResult<Customer> GetById(int id)
        {
            var _customer = (from obj in _db.Customers where obj.CustomerID == id select obj).FirstOrDefault();

            if (_customer is null)
                return NotFound();

            return _customer;
        }

        [HttpPost("AddCustomer")]
        public async Task<ActionResult<Customer>> AddCustomer([FromBody]Customer _customer)
        {
            await _db.AddAsync<Customer>(_customer);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = _customer.CustomerID }, _customer);
        }

        [HttpPut("UpdateCustomer")]
        public async Task<ActionResult<Customer>> UpdateCustomer([FromBody]Customer _customer)
        {
            _db.Update<Customer>(_customer);
            await _db.SaveChangesAsync();
            return Ok(_customer);
        }

        [HttpDelete("DeleteCustomer/{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var _customer = (from obj in _db.Customers where obj.CustomerID == id select obj).FirstOrDefault();
            _db.Remove<Customer>(_customer);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}