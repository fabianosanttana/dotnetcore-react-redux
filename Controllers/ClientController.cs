using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeRentCar.Entities;
using WeRentCar.Data;
using Microsoft.AspNetCore.Http;

namespace WeRentCar.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        private readonly DatabaseContext _db = new DatabaseContext();

        [HttpGet()]
        [ProducesResponseType(typeof(IEnumerable<Client>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<Client> GetClients() => _db.Clients;

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Client> GetById(int id)
        {
            var client = (from obj in _db.Clients
                          where obj.id == id
                          select obj).FirstOrDefault();

            if (client.Equals(null))
            {
                return NotFound();
            }

            return client;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Client>> CreateClient(Client _client)
        {
            await _db.AddAsync(_client);
            return CreatedAtAction(nameof(GetById), new { id = _client.id }, _client);
        }
    }
}
