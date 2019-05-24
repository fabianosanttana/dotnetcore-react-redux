using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeRentCar.Data;
using WeRentCar.Entities;

namespace WeRentCar.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly DatabaseContext _db = new DatabaseContext();

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(IEnumerable<Customer>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<Customer> GetCustomers() => _db.Customers.ToList();

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Customer> GetById(int id)
        {
            var _customer = (from obj in _db.Customers where obj.CustomerID == id select obj).FirstOrDefault();

            if (_customer is null)
                return NotFound();

            return _customer;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Customer>> CreateClient(Customer _customer)
        {
            await _db.AddAsync(_customer);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = _customer.CustomerID }, _customer);
        }
    }
}