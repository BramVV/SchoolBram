using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace wk2_Oef4
{
    class TemperatureSensor
    {
        public event TemperatureDelegate ReadTempEvent;
        public double ReadTemp() {
            double temp;
            temp = new Random().Next(-30, 30);
            return temp;
        }
    }
}
