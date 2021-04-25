using hajosproba.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hajosproba.Controllers
{

    //[Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("questions/all")]
        public ActionResult M1()
        {
            HajostesztContext context = new HajostesztContext();
            var kérdések = from x in context.Questions select x.QuestionText;

            return new JsonResult(kérdések);
        }
        public ActionResult M2(int sorszam)
        {
            HajosteszContext context = new HajosteszContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();
            if (kerdes == null)
            {
                return BadRequest("Nincs ilyen sorszámú kérdés");
            }

            return new JsonResult(kerdes);
        }
    }
}
