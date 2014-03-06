using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Event
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string ImageUrl { get; set; }
        public Location Location { get; set; }
        public List<Session> Sessions { get; set; } 
    }

    public class Location
    {
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
    }

    public class Session
    {
        public string Name { get; set; }
        public string CreatorName { get; set; }
        public int Duration { get; set; }
        public string Level { get; set; }
        public string Abstract { get; set; }
        public int UpVoteCount { get; set; }
    }
}