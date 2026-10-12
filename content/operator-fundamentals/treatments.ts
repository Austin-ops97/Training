import type { ComponentTreatment } from "@/content/operator-fundamentals/schema";

/**
 * Full eight-point plan for every lesson that teaches a component.
 * Trouble lines name a failure mechanism and an observable symptom.
 * They do not give limits, setpoints, or repair steps.
 */
export const treatmentsByLesson: Record<string, ComponentTreatment[]> = {
  "of-07": [
    {
      component: "pump",
      what: "A pump is a machine that adds energy to a liquid so the liquid can move through a pipe.",
      principle: "The pump raises the pressure of the liquid. Flow still requires an open path from the discharge toward a lower pressure.",
      how: "The driver turns the pump. The pump takes liquid in at the suction and sends it out at the discharge. If the suction path or the discharge path is blocked, the intended flow does not happen.",
      parts: "A suction connection, the pumping element, a discharge connection, and a driver. Seals and bearings are part of the machine and are not overhauled in this course.",
      cycle: "Stopped, then running and moving liquid, then stopped again. This lesson does not assign a start procedure.",
      interaction: "The pump depends on a source of liquid, a driver, and open piping. A valve later in the path can stop the flow the pump is trying to make.",
      operator: "The operator needs the pump because cooling water, oil, and other liquids do not move themselves to the places the unit needs them.",
      trouble:
        "A failure mechanism is a loss of the pressure rise, or a driver that is not turning the pump. Observable symptoms are no flow, a discharge pressure that is not established, unusual noise, or leakage at the pump. Report the symptom. Do not invent a repair.",
    },
  ],
  "of-07v": [
    {
      component: "valve",
      what: "A valve is a device that opens, throttles, or closes a flow path.",
      principle: "Fluid moves only where a path is open and a pressure difference exists. The valve changes the path. It does not, by itself, create the pressure difference.",
      how: "A stem, actuator, or handwheel moves an internal element. Open leaves a path. Closed blocks it. A position between the two restricts the path. Some valves are built to move to a defined position if their power source is lost. That position is a design fact, not a number this course assigns.",
      parts: "A body in the pipe, an internal element that moves, and a means of moving it: handwheel, motor, air, or oil. Position indication may be separate from the valve.",
      cycle: "Open, moving, and closed are the positions an operator talks about. The site procedure decides which position is required. This lesson does not line valves up.",
      interaction: "A valve works with the pump or the pressure source on that pipe. Closing the valve is not the same action as stopping the pump. Instrument air or control oil may be what moves the valve.",
      operator: "The operator needs the valve because the plant has to be able to admit or stop a fluid without taking the whole system apart.",
      trouble:
        "A failure mechanism is an element that does not move, or a valve that moves to the wrong position for the condition. Observable symptoms are a position that does not change when asked, a flow or pressure that does not match the claimed position, or leakage at the body. The symptom is reported. The repair is not taught here.",
    },
  ],
  "of-18": [
    {
      component: "generator",
      what: "A generator is the machine that converts shaft work into alternating current.",
      principle: "A changing magnetic flux in the stator windings induces a voltage. Excitation produces the field on purpose. Frequency follows the number of poles and the rotational speed.",
      how: "The rotor turns inside the stator. Excitation creates the field. As the field sweeps the stator windings, the voltage alternates. The operator sees output only when the machine is at the right condition to be connected and is connected. This lesson does not close a breaker.",
      parts: "Rotor, stator, field winding, armature winding, and the excitation source. Bearings and cooling are supporting parts, taught with the oil and cooling lessons.",
      cycle: "At rest, rolling with no useful output, excited and at speed, then connected and delivering power, then disconnected. The site defines the checks between those states.",
      interaction: "The turbine shaft turns the rotor. The excitation system feeds the field. The transformer and breaker connect the stator output to the grid. Station direct current often supports protection and control when the generator is not the source.",
      operator: "The operator needs the generator because it is the point where the plant's shaft work becomes the product the grid takes.",
      trouble:
        "A failure mechanism is loss of excitation, a winding fault, or a mechanical problem that the protection is built to detect. Observable symptoms are a loss of voltage or output, unusual vibration, unusual heat or smell, or a protective trip that opens the path. Those are symptoms to recognize and report. No trip setting is stated here.",
    },
  ],
  "of-19": [
    {
      component: "transformer",
      what: "A transformer transfers alternating-current power from one voltage to another through a magnetic field.",
      principle: "A changing current in one winding produces a changing flux, which induces a voltage in the other winding. Direct current does not keep that flux changing, so a transformer is an alternating-current device.",
      how: "Power enters one winding and leaves the other at a different voltage. For a given power, raising the voltage lowers the current. A peaker uses that fact to send power out over the lines. The nameplate voltages differ by plant and are not copied here.",
      parts: "A magnetic core, at least two windings, bushings where the conductors enter, and a cooling arrangement. Oil-filled and dry designs both exist. This course does not pick one for a named plant.",
      cycle: "Energized and carrying power, or de-energized. Energizing and removing a transformer from service follow the site's procedure, which this lesson does not copy.",
      interaction: "The generator feeds the step-up transformer. The transformer feeds the switchyard. Protection and the breaker decide when that path is allowed to stay closed.",
      operator: "The operator needs the transformer because the generator voltage and the grid voltage are not the same job.",
      trouble:
        "A failure mechanism is damaged insulation, a winding fault, or a cooling problem that lets heat build. Observable symptoms are unusual noise, heat, a smell, leakage of cooling fluid, or a protective trip. Report the symptom. Do not approach the equipment or invent a limit.",
    },
  ],
  "of-19b": [
    {
      component: "breaker",
      what: "A circuit breaker is a switch built to open a power path, including under fault current.",
      principle: "Current requires a closed path. Opening the breaker interrupts that path. Protection decides when an automatic open is required. The operator does not invent that decision from this course.",
      how: "A mechanism opens or closes the contacts. When the contacts are closed, the generator can be tied to the grid if the other conditions are met. When they open, the generator is no longer tied to the grid. Synchronization is the matching that has to be true before a close is reasonable. This lesson does not give the matching procedure.",
      parts: "Contacts, an operating mechanism, and the connection to protection. Status indication tells the operator whether the device is open or closed. That indication is a report, not the contact itself.",
      cycle: "Open, closing, closed, and tripping open. A trip is an automatic open. A planned open is a different event. The site procedure owns both actions.",
      interaction: "The breaker sits between the transformer and the grid, or elsewhere the one-line shows. Protection, the generator, and the grid all meet at that device. Batteries often supply the control power that lets it operate.",
      operator: "The operator needs the breaker because it is the device that ties the plant to the grid and the device that separates them.",
      trouble:
        "A failure mechanism is a mechanism that does not move, or contacts that do not interrupt when required. Observable symptoms are a status that does not change when a command is given, a disagreement between the indication and the electrical result, or a trip the operator did not plan. Report it. Do not substitute a local action this course never teaches.",
    },
  ],
  "of-20": [
    {
      component: "compressor",
      what: "On a gas turbine, the compressor is the section that draws inlet air in and raises its pressure.",
      principle: "Work done on a gas raises its pressure, and the temperature rises with that compression. The lesson states the result without a gas-law derivation.",
      how: "Inlet air passes a filter and enters the compressor. Rotating blades, driven by the shaft, push the air to a higher pressure and a higher temperature. The compressed air then goes to the combustor. Stage counts and pressure ratios are not stated.",
      parts: "The inlet and filter ahead of it, the rotating blades, the stationary vanes, and the casing. The shaft is shared with the turbine section.",
      cycle: "The compressor turns whenever the shaft turns. During a start it is driven by the starter. Once the turbine is making enough shaft work, the turbine drives the compressor. This is a description of roles, not a start procedure.",
      interaction: "Dirty or blocked filtration changes what the compressor can do. The combustor depends on the air the compressor delivers. The turbine and the compressor share one shaft.",
      operator: "The operator needs the compressor because the engine has nothing to burn the fuel with, and nothing to expand, until air has been compressed.",
      trouble:
        "A failure mechanism is blockage at the inlet, damage to the blades, or a stall condition the design is built to avoid. Observable symptoms are unusual noise, unusual vibration, a pressure or temperature reading that does not match the expected direction of change, or a trip. No pressure limit is given. The symptom is reported.",
    },
  ],
  "of-21": [
    {
      component: "gas-turbine",
      what: "The hot section of a gas turbine is where fuel is burned and the hot gas expands through the turbine to make shaft work.",
      principle: "Combustion adds heat. The hot gas expands and pushes on the turbine blades. That expansion is what produces the shaft work. The compressor already raised the pressure of the air.",
      how: "Fuel is added to the compressed air and burned. The hot gas expands through the turbine section and turns the shaft. The shaft drives both the compressor and, through the coupling, the generator. Burner hardware and fuel schedules are left to the plant.",
      parts: "The combustor, the fuel admission into it, and the turbine blades and nozzles. The shaft connects this section to the compressor and the generator.",
      cycle: "No flame and no shaft work, then combustion with expansion and shaft work, then flame out and coastdown. The real order of fuel and ignition is the site's procedure. This lesson only names the purpose.",
      interaction: "The compressor supplies the air. The fuel system supplies the gas. The shaft delivers work to the compressor and the generator. The exhaust leaves to the stack on a simple-cycle unit.",
      operator: "The operator needs this section because it is where the fuel becomes the torque that keeps the shaft turning.",
      trouble:
        "A failure mechanism is a flame that does not light, a flame that goes out, or hot gas that is not expanding evenly. Observable symptoms are a failed start, a trip, unusual temperature spread the site's instruments display, unusual noise, or exhaust that does not match a fired condition. No temperature is filled in. The operator recognizes and reports.",
    },
  ],
  "of-22": [
    {
      component: "gas-turbine",
      what: "A gas turbine, taken as the whole engine, is the compressor, combustor, and turbine on one shaft, with an exhaust path.",
      principle: "The Brayton idea, told without an equation set, is compression, heat addition, and expansion. Simple cycle sends the exhaust out. Combined cycle is a different plant that recovers heat from that exhaust.",
      how: "Air is compressed, fuel is burned, gas expands and turns the shaft, and the shaft turns the generator. On a simple-cycle unit the exhaust goes to the stack. Auxiliaries have to be running because the engine cannot oil, cool, or control itself alone.",
      parts: "Inlet, compressor, combustor, turbine, shaft, exhaust, and the coupling to the generator. Auxiliaries sit beside that core and are mapped in the facility lessons.",
      cycle: "Offline, started, at speed, loaded, unloaded, and shut down or tripped. Combined cycle adds a steam cycle the simple-cycle plant does not have. No times are assigned.",
      interaction: "The generator takes the shaft work. The fuel, oil, cooling, and air systems support the engine. The exhaust path is part of the plant. On a combined-cycle unit that path also feeds a heat-recovery boiler. Viper Power is described as simple cycle, so that boiler is not part of its description.",
      operator: "The operator needs the whole machine as one picture so a change in air, fuel, or shaft speed is not treated as an isolated gauge.",
      trouble:
        "A failure mechanism is a loss of the support the engine needs, or an exhaust path that is not the path the design uses. Observable symptoms are a trip, an inability to stay at speed, unusual vibration, or exhaust behavior that does not match simple cycle or combined cycle as the site built it. The symptom is recognized and reported. No performance number is invented.",
    },
  ],
  "of-23": [
    {
      component: "gas-turbine",
      what: "On the facility map, the gas turbine is the core engine between the inlet and the exhaust.",
      principle: "The principle was taught earlier: compress, add heat, expand. This lesson uses that picture and does not re-derive it.",
      how: "Air enters, is compressed, fuel is burned, and the turbine turns the shaft. The operator points to those blocks in order.",
      parts: "Inlet, compressor, combustor, turbine section, and exhaust. Each block has a purpose. The design manual stays closed.",
      cycle: "The engine is either not in the operating sequence, or it is somewhere in the generic sequence the later lessons name. This lesson does not start it.",
      interaction: "The generator is on the same shaft line. Fuel, oil, and air systems meet the engine at defined points the site's drawings show.",
      operator: "The operator needs the map so a round and a screen both refer to the same blocks.",
      trouble:
        "A failure mechanism on the map is any block that is not doing its purpose: no air path, no flame, or no shaft work. Observable symptoms are unusual noise, vibration, heat, or a trip indication. The operator watches and reports. Limits stay in the site procedure.",
    },
    {
      component: "generator",
      what: "On the facility map, the generator is the electrical machine at the end of the turbine shaft.",
      principle: "Shaft rotation and excitation produce alternating voltage, as the generator lesson already taught.",
      how: "The shaft turns the rotor. When the machine is excited and connected, output appears on the displays. This lesson does not connect it.",
      parts: "The generator housing, the coupling to the turbine, and the leads toward the transformer. Internal rotor and stator were named earlier.",
      cycle: "Disconnected, then able to be synchronized, then online, then offline. The words are the operating-state lessons' words.",
      interaction: "The turbine drives it. The transformer and breaker carry its output. Excitation and protection sit with it.",
      operator: "The operator needs to know which machine is the generator so megawatts are not looked for on the engine itself.",
      trouble:
        "A failure mechanism is a loss of output or a protective trip. Observable symptoms are output that disappears, a trip alarm, unusual heat, or unusual vibration at the generator. Report the symptom. Do not enter the machine.",
    },
    {
      component: "compressor",
      what: "On the facility map, the compressor is the front section of the engine, after the inlet filter.",
      principle: "Compression raises pressure and temperature. That was taught before this map.",
      how: "Filtered air enters and leaves the compressor hotter and at higher pressure, on its way to the combustor.",
      parts: "The inlet duct, the filter, and the compressor casing. Blade details are not a facility-survey topic.",
      cycle: "It turns with the shaft. It does not have a separate operating sequence from the engine.",
      interaction: "The filter protects it. The combustor receives its discharge. The shaft ties it to the turbine.",
      operator: "The operator needs the inlet and compressor as the start of the air path, because a blocked inlet is an engine problem even though it is outside the combustor.",
      trouble:
        "A failure mechanism is a blocked or damaged inlet path. Observable symptoms are unusual noise at the inlet, a filter indication the site provides, or a compressor reading that does not follow the fired condition. No differential-pressure number is stated. The symptom is reported.",
    },
  ],
  "of-24": [
    {
      component: "motor",
      what: "A motor is a machine that turns electrical power into shaft rotation. On some peakers an electric motor is the starter. Other designs use a different starter. This course does not assign one to Viper Power.",
      principle: "A current in a magnetic field produces a force. That force, arranged around a shaft, produces torque. The magnetism lesson supplied the force. This lesson applies it.",
      how: "When the motor is energized, the torque turns the shaft it is coupled to. As a starter, its job is to bring the turbine shaft up so the engine can take over. When the engine is driving itself, the starter's job is finished. The site procedure says when that handoff happens. This lesson does not.",
      parts: "A stator, a rotor, bearings, and the electrical supply and contactor that energize it. The coupling to the turbine shaft is the mechanical connection.",
      cycle: "De-energized, energized and turning the shaft, then de-energized again. A motor that is not a starter, such as a pump motor, uses the same idea with a different load.",
      interaction: "The motor needs a supply and a closed electrical path. It loads the shaft it is attached to. On a start, it interacts with the turbine until the turbine no longer needs it.",
      operator: "The operator needs the motor lesson because pumps and, on some designs, the starter will not turn until a motor is doing its job.",
      trouble:
        "A failure mechanism is a loss of supply, an overload trip, or a mechanical jam. Observable symptoms are a motor that does not turn, a trip of its supply, unusual noise, heat, or smell, or a shaft that was supposed to roll and does not. Report the symptom. Do not reset a device from this lesson.",
    },
  ],
  "of-25": [
    {
      component: "pump",
      what: "In the lube and cooling systems, pumps are the machines that move oil and cooling fluid.",
      principle: "The same pressure-rise principle as the fluid lesson. Oil is pumped so a film can reach the bearings. Cooling fluid is pumped so heat can be carried to a cooler.",
      how: "A lube pump takes oil from a reservoir and sends it to the bearings. A cooling pump moves the cooling fluid through the cooler and back. Layouts differ. This lesson does not count the pumps on a named unit.",
      parts: "Reservoir or source, pump, piping, and the bearings or the cooler the fluid serves. Filters and coolers are supporting pieces.",
      cycle: "A pump may need to be running before the shaft is allowed to turn, and it may need to keep running while the shaft coasts down. The site procedure sets that order. No duration is given here.",
      interaction: "Bearings depend on the lube pump. The cooler depends on flow. A valve in the oil or cooling line can block what the pump is doing. The gas turbine cannot be treated as ready if these loops are not.",
      operator: "The operator needs these pumps because a turning shaft without oil, or a hot fluid that is not being cooled, is a machine at risk.",
      trouble:
        "A failure mechanism is loss of the oil film or loss of cooling flow. Observable symptoms are low oil pressure, a rising temperature, leakage, unusual pump noise, or a trip associated with those systems. No pressure or temperature limit is stated. Recognize the symptom and report it.",
    },
    {
      component: "valve",
      what: "In the oil systems, valves direct or stop lube oil, cooling flow, and control oil.",
      principle: "The valve still only changes the path. Control oil is a fluid used to move devices. It is not the same job as the oil film in a bearing.",
      how: "A control-oil valve moves because pressure is applied or removed. The device it serves then moves. Which valves exist is a site fact. This lesson does not name a lineup.",
      parts: "A valve body in the oil piping and an actuator. The actuator may be the oil itself.",
      cycle: "The valve is in the position the control system or the procedure last set. A change of position is a step in a site procedure, not a step in this course.",
      interaction: "Control oil valves interact with the devices they move, often fuel or inlet hardware. Lube valves interact with the bearing supply. Losing the oil supply changes what those valves can do.",
      operator: "The operator needs to know a valve in an oil line can stop protection even when the pump is running.",
      trouble:
        "A failure mechanism is a valve that does not move, or a control-oil supply that cannot hold the valve. Observable symptoms are a device that does not stroke, a position that disagrees with the command, or a leak. Report the symptom. Do not command a valve from this lesson.",
    },
  ],
  "of-26": [
    {
      component: "transformer",
      what: "In the switchyard, the step-up transformer is the facility's transformer, the one the generator lesson's machine feeds.",
      principle: "The same alternating-current principle as the transformer lesson. This lesson places the machine in the yard.",
      how: "Generator output enters the transformer and leaves at the yard voltage. The voltages are nameplate facts and are not copied from any plant into this course.",
      parts: "The transformer tank or enclosure, bushings, and the cooling equipment around it, sitting in the yard.",
      cycle: "In service with the unit or isolated. Switching follows the site procedure.",
      interaction: "The generator is on one side and the breaker and the grid are on the other. Yard work and the control room both have to know its state.",
      operator: "The operator needs the yard transformer as a piece of the facility that can be walked past and seen on a display, not only as a symbol.",
      trouble:
        "A failure mechanism is the same class as any transformer: insulation, a winding fault, or cooling trouble. Observable symptoms in the yard are unusual noise, heat, leakage, or a trip that opens the path. Stay outside the boundary. Report what you see.",
    },
    {
      component: "breaker",
      what: "The yard breaker is the facility's breaker between the plant and the grid.",
      principle: "An open breaker is an open path. The electrical lesson already taught why that stops the current.",
      how: "The breaker closes only when synchronization and the site procedure allow it, and it opens on a planned shutdown or a trip. This lesson does not operate it.",
      parts: "The breaker, its mechanism, and the status the control room sees. Batteries and the direct-current system are the separate supply that lets control and protection work.",
      cycle: "Open or closed, with a trip as an automatic open. Status is what the operator monitors.",
      interaction: "The transformer, the generator, protection, and the grid all meet here. The direct-current system interacts because the breaker may not operate without it.",
      operator: "The operator needs the yard breaker because availability of the unit to the grid is not real while that path is open, and a trip is this device doing its job.",
      trouble:
        "A failure mechanism is a breaker that does not change state, or a direct-current supply that cannot operate it. Observable symptoms are a status that disagrees with the expected state, a failure to close or open when the procedure says it should, or a trip alarm. Report it. No control action is taught.",
    },
  ],
  "of-27": [
    {
      component: "compressor",
      what: "A plant-air compressor is a separate machine from the gas-turbine compressor. It supplies instrument air or service air.",
      principle: "It still raises the pressure of a gas by doing work on it. The gas is air for instruments or for service, not the air the engine is compressing for combustion.",
      how: "The compressor takes atmospheric air, raises its pressure, and sends it to a receiver and then to the users. Instrument air and service air are different systems even when they sit near each other.",
      parts: "The air compressor, a cooler or dryer where the design uses one, a receiver, and the piping to the users. Details vary by plant.",
      cycle: "Running to keep the receiver supplied, or stopped. How it is started is the site's procedure.",
      interaction: "Instrument-air users, including some valves, depend on it. Service air is a utility and is not a substitute for instrument air. The gas-turbine compressor does not do this job.",
      operator: "The operator needs this compressor because devices that move on air will not move reliably without it.",
      trouble:
        "A failure mechanism is loss of the compressed-air supply. Observable symptoms are a falling receiver pressure, valves that do not stroke, or a compressor that is not running when the system expects it. No pressure setpoint is given. Report the symptom.",
    },
    {
      component: "valve",
      what: "An instrument-air valve is a valve whose actuator is moved by air from the instrument-air system.",
      principle: "The valve changes the process path. The air is only the force that moves it. If the air is lost, the valve goes to the position its design chooses. That position is a site fact.",
      how: "Air pressure on the actuator moves the valve. Removing or applying air changes the position. The control system asks for the position. The operator sees the result on a status or a process reading.",
      parts: "The valve body, the actuator, and the air tubing. Position feedback may be a separate device.",
      cycle: "The valve sits at the position last asked for, and it moves when the air and the command agree. A loss of air is an uncommanded move to the design's fail position.",
      interaction: "The instrument-air compressor and dryer interact with every air-operated valve. The process the valve serves, fuel, air, or water, sees the position as a change in its path.",
      operator: "The operator needs this because a loss of instrument air is a plant event, not a local valve problem only.",
      trouble:
        "A failure mechanism is loss of air, a stuck actuator, or a positioner that does not follow the command. Observable symptoms are a valve that does not move, a position that disagrees with the command, or several air valves moving at once when the air supply fails. Report the symptom. Do not stroke the valve from this lesson.",
    },
  ],
  "of-30": [
    {
      component: "valve",
      what: "Valve position, as a measurement, is an indication of where the valve is, not the valve itself.",
      principle: "A sensor turns a physical position into a signal. The signal can be wrong while the valve is right, or right while the operator's assumption is wrong.",
      how: "A position sensor follows the valve's moving element and reports open, closed, or a fraction of travel. The screen shows that report. The valve lesson already taught how the valve moves.",
      parts: "The sensor, the wiring or tubing back to the control system, and the indication on the screen. The valve body is the machine being measured.",
      cycle: "The indication should change when the valve changes position. A command, a movement, and a new indication are the sequence the operator expects to see. The site defines the acceptable disagreement. This course does not.",
      interaction: "The indication interacts with alarms, trips, and the operator's decision to trust the screen. The valve interacts with the process. A bad indication can look like a bad valve.",
      operator: "The operator needs the position indication because the path of a fluid is otherwise invisible.",
      trouble:
        "A failure mechanism is a sensor that sticks, a wire that opens, or an indication that freezes. Observable symptoms are a position that does not change when the valve is asked to move, a position that disagrees with the process result, or a point that stops updating. The symptom is reported. Calibrating the sensor is not this lesson.",
    },
  ],
};
