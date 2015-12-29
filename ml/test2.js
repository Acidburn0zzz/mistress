module.exports = function(input) {
  var net = {"layers":[{"mtpd":{},"dptd":{},"msec":{},"dsec":{},"mrt":{},"drt":{}},{"0":{"bias":9.059205143934298,"weights":{"mtpd":3.124530900536444,"dptd":-0.6697629483168785,"msec":-12.824399405232,"dsec":-6.302652159896453,"mrt":-25.594165608416468,"drt":5.542678888901814}},"1":{"bias":-0.7899670670815602,"weights":{"mtpd":-0.7879904007207222,"dptd":-0.32014625347293235,"msec":1.5192139424750981,"dsec":0.6915676095385903,"mrt":2.0766528571259117,"drt":-1.0132865677844523}},"2":{"bias":-6.13591501722649,"weights":{"mtpd":4.621555092752366,"dptd":-0.9461719299355682,"msec":10.066917954444378,"dsec":5.225779650697126,"mrt":18.409253102424383,"drt":-6.8008451364096425}}},{"bot":{"bias":-0.40593738920836014,"weights":{"0":19.712693846570076,"1":-2.0735731398826074,"2":-15.006209731111149}},"human":{"bias":0.46760628852625163,"weights":{"0":-19.727921070158008,"1":1.9773687404403428,"2":14.996903282839249}}}],"outputLookup":true,"inputLookup":true};

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i];
    var output = {};
    
    for (var id in layer) {
      var node = layer[id];
      var sum = node.bias;
      
      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = (1 / (1 + Math.exp(-sum)));
    }
    input = output;
  }
  return output;
}
