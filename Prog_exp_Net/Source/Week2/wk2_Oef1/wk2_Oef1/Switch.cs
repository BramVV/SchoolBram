using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wk2_Oef1
{
    class Switch
    {

        //public event SwitchLightDelegate SwitchLight;
        public SwitchLightDelegate SwitchLight;
        public void TurnOn(LightBulb light) {
            SwitchLight(true);
            light.IsOn = true;
        }
        public void TurnOff(LightBulb light) {
            SwitchLight(false);
            light.IsOn = false;
        }
    }
}
