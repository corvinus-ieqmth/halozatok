
﻿using hajosproba.Models;
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
        [Route("questions/countNew")]
        public int M1()
        {
            HajostesztContext context = new HajostesztContext();
            int kerdesekSzama = context.Questions.Count();
            return kerdesekSzama;
        }
        [HttpGet]
        [Route("questions/all")]
        public ActionResult M3()
        {
            HajostesztContext context = new HajostesztContext();
            var kérdések = from x in context.Questions select x.QuestionText;

            return new JsonResult(kérdések);
        }
        [HttpGet]
        [Route("questions/{sorszam}")]
        public ActionResult M2(int sorszam)
        {
            HajostesztContext context = new HajostesztContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();
            if (kerdes == null)
            {
                return BadRequest("Nincs ilyen sorszámú kérdés");
            }

            return new JsonResult(kerdes);
        }


        //az elsővel megegyezik
        [HttpGet]
        [Route("questions/count")]
        public int M4() //Tetszőleges metódusnév
        {
            HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();

            return kérdésekSzáma;
        }
    }
    /*
﻿using hajosproba.Models;
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
    
>>>>>>> d072c6cb14af56869769a4ffbde7afc9eebe0f0f
    }
}*/
}


