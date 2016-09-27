using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wk2_Oef1
{
    class LightBulb
    {
        public bool isOn;
        public string color;
        public bool IsOn
        {
            get { return isOn; }
            set { isOn = value;}
        }

        public string Color { get; set; }
    }
}
