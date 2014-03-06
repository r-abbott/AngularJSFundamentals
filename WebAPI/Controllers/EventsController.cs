using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class EventsController : ApiController
    {
        // GET api/events
        public IEnumerable<string> Get()
        {
            return new List<string> {"{\"name\": \"Some other event\"}"};
        }

        // GET api/events/5
        public Event Get(int id)
        {
            return new Event
                {
                    Name="Angular Boot Camp",
                    Date="1/1/2013",
                    Time="10:30 am",
                    Location = new Location
                        {
                            Address = "Google Headquarters",
                            City="Mountain View",
                            State = "CA"
                        },
                    ImageUrl = "img/angularjs-logo.png",
                    Sessions = new List<Session>
                        {
                            new Session
                                {
                                    Name="Directives Masterclass",
                                    CreatorName = "Bob Smith",
                                    Duration = 1,
                                    Level = "Advanced",
                                    Abstract = "In this session you will learn the ins and outs...",
                                    UpVoteCount = 0
                                },
                                new Session
                                {
                                    Name="Scopes for fun and profit",
                                    CreatorName = "John Doe",
                                    Duration = 2,
                                    Level = "Introductory",
                                    Abstract = "This session will take a closer look at the...",
                                    UpVoteCount = 0
                                },
                                new Session
                                {
                                    Name="Well Behaved Controllers",
                                    CreatorName = "Bill Withers",
                                    Duration = 4,
                                    Level = "Intermediate",
                                    Abstract = "You like Bill Withers? Lets play some Bill Withers together, but well behaved. Controller style!",
                                    UpVoteCount = 0
                                }
                        }
                };
        }

        // POST api/events
        public void Post(Event e)
        {
            
        }

        // PUT api/events/5
        public void Put(int id, Event e)
        {
        }

        // DELETE api/events/5
        public void Delete(int id)
        {
        }
    }
}
