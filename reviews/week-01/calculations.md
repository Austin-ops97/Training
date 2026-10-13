> Historical Week 1 review. For the current course and subsequent corrections (60 Hz, AC nameplate context, governor/excitation, and storage), see ../textbook/review.md.

# Worked calculations

Every arithmetic step taught in Week 1 is below. Graded items are also in [assessments.md](assessments.md). Figures that are not a Viper Power measurement are labeled.

## Day 1 — charge, current, resistance, power, and heating

Sources for the definitions are OpenStax College Physics 2e (chapters 18–21) and the SI Brochure. The elementary-charge digits in the lesson are the exact SI defining constant. OpenStax rounds the same charge to 1.60×10⁻¹⁹ C.

### Checkpoint d1c1 (graded)

I = Q / t = 180 C / 60 s = **3 A**.

### Resistivity table and line resistance (taught, then graded as d1q2)

OpenStax College Physics 2e Table 20.1 at 20°C: silver 1.59×10⁻⁸ Ω·m, copper 1.72×10⁻⁸ Ω·m, aluminum 2.65×10⁻⁸ Ω·m. Checked against that page on 12 October 2026.

Illustrative aluminum conductor, not a Viper Power measurement. L = 1 km = 1,000 m. A = 500 mm² = 500 × 10⁻⁶ m² = 5.00×10⁻⁴ m².

R = ρ L / A = (2.65×10⁻⁸ Ω·m) × (1,000 m) / (5.00×10⁻⁴ m²) = **0.053 Ω**.

Checks on the same inputs: copper gives (1.72×10⁻⁸ × 1,000) / 5.00×10⁻⁴ = **0.0344 Ω**. Inverting the formula gives 5.00×10⁻⁴ / (2.65×10⁻⁸ × 1,000) = **18.9 Ω** (18.867… rounded). Using 1 m instead of 1,000 m gives **5.3×10⁻⁵ Ω**.

### Potential difference on the nameplate, d1q3 (graded)

13.8 kV = 13,800 V. V = W / Q and 1 V = 1 J/C, so the nameplate is **13,800 J/C**. It is a voltage, not a power.

### Heating on the illustrative line, d1q4 (graded)

Same line, I = 1,000 A, R = 0.053 Ω. This is one conductor, not a three-phase generator formula.

1. V = I R = 1,000 A × 0.053 Ω = **53 V**.
2. P = V I = 53 V × 1,000 A = **53,000 W**.
3. P = I² R = (1,000 A)² × 0.053 Ω = **53,000 W** = **53 kW**.
4. P = V² / R = (53 V)² / 0.053 Ω = 2,809 / 0.053 = **53,000 W**.
5. H = I² R t = 53,000 W × 3,600 s = **190,800,000 J** = 1.908×10⁸ J over one hour.

### Ohm's law, d1q5 (graded)

I = V / R = 12 V / 4 Ω = **3 A**.

### Series, d1q6 (graded)

R = 2 Ω + 3 Ω + 7 Ω = **12 Ω**.

### Parallel, taught in the section (not a separate grade)

Two 4 Ω resistors: 1/R = 1/4 + 1/4 = 1/2, so R = **2 Ω**. The voltage across each branch is the supply voltage.

### Kilowatt-hour, d1q9 (graded)

1 kWh = 1,000 W × 3,600 s = **3,600,000 J** = 3.6×10⁶ J.

### Line heating, d1q10 (graded)

Same power, double the voltage: current falls to one half. Heating follows current squared, so the heating falls to (1/2)² = **one quarter**.

### Checkpoint d1c2 (graded)

50 MW × 2 h = **100 MWh**. The power is still 50 MW.

## Day 1 — energy from a steady output

Definition used in the lesson: energy (MWh) = power (MW) × time (hours).

Checkpoint example, taught before the check: 50 MW held for 2 hours is 50 × 2 = **100 MWh**. The power is still 50 MW.

### Exercise d1e1 (graded)

Inputs from the course outline, not from a nameplate: 6 units × 59 MW × 3 hours.

1. 6 × 59 MW = **354 MW**.
2. 354 MW × 3 h = **1,062 MWh**.

Expected entry: `1062`. Tolerance: 0.

59 MW is the exercise input. Inventory discrepancy D11 records about 65 MW ISO per unit (2024 test) and about 330 MW net at 95°F (SOP 029, source S157). Do not report 1,062 MWh as a measured plant total.

Related check: 354 MW for one hour is **354 MWh**. Multiplying by 60 would treat hours as minutes.

## Day 1 — line loss when voltage doubles (taught, graded as d1q10)

For the same power, current = power / voltage. Heating in the line follows current squared.

Double the voltage and the current is cut in half. (1/2)² = 1/4, so heating loss falls to **one quarter** if the resistance is unchanged.

The Crash Course example voltages are illustrations in the Day 2 video. They are not Viper Power voltages. The plant voltages used in the lessons are 13.8 kV at the generator and 138 kV on the switchyard side of the step-up transformers.

## Day 2 — synchronous speed (taught with the path, not a separate numeric grade)

n (rpm) = 120 × frequency (Hz) / number of poles.

- 60 Hz, 2 poles: 120 × 60 / 2 = **3,600 rpm**.
- 60 Hz, 4 poles: 120 × 60 / 4 = **1,800 rpm**.

Viper Power shaft speed is not a Week 1 inventory fact. Do not teach the GE video line "over 3,000 RPM" as a setpoint.

## Day 2 — capacity factor as a percent (taught, then quizzed)

EIA Table 6.07.B, annual 2025, marked preliminary: nuclear capacity factor 0.910 = **91.0 percent**. Hydro on the same sheet: 0.353 = **35.3 percent**.

These are national utility-scale figures, not ERCOT and not Viper Power. Capacity factor is not efficiency.

## Day 3 — heat-rate efficiency examples (level 3, EIA examples, not graded)

EIA states efficiency = 3,412 Btu/kWh ÷ heat rate (Btu/kWh).

- 3,412 / 10,500 = 0.32495, about **33 percent**.
- 3,412 / 7,500 = 0.45493, about **45 percent**.

These are EIA's examples. Week 1 has no inventory quote of a Viper Power heat rate, so none is used.

EPA comparison, not a plant test: CHP can exceed **80 percent**, against about **50 percent** for typical separate electricity plus an on-site boiler.

## Day 4 — capacity factor (formula, then graded)

Capacity factor = energy produced (MWh) / (rated capacity (MW) × hours in the period).

A non-leap year has 365 × 24 = **8,760 hours**.

### National equivalent full-load hours (level 3, taught, not graded)

EIA Table 6.07.A, annual 2025, preliminary:

- Gas turbines: 0.141 × 8,760 = **1,235.16** hours.
- Combined cycle: 0.584 × 8,760 = **5,115.84** hours.

These are national averages, not a Viper Power dispatch plan.

### July row on the same sheet (taught, then quizzed)

Table 6.07.A, still preliminary:

- July 2026 gas turbines: **0.233** (23.3 percent).
- July 2026 combined cycle: **0.723** (72.3 percent).
- July 2025 gas turbines: **0.249** (24.9 percent). That earlier July is not the July 2026 figure.

### Exercise d4e1 (graded)

Practice numbers, not a Viper Power record. Rating 100 MW. Energy 120,000 MWh. Non-leap year.

1. Maximum energy = 100 MW × 8,760 h = **876,000 MWh**.
2. Capacity factor = 120,000 / 876,000 = 0.136986.
3. As a percent to one decimal: **13.7 percent**.

Expected entry: `13.7`. Tolerance: 0.05.

## Day 5 — two capacity bases (graded)

Inventory approximates on different bases (D11): about 65 MW ISO per unit, and about 330 MW net at 95°F for the plant.

### Exercise d5e1 (graded)

1. 6 × 65 = **390 MW**.
2. 390 − 330 = **60 MW**.
3. 60 / 390 = 0.153846.
4. As a percent to one decimal: **15.4 percent**.

Expected entry: `15.4`. Tolerance: 0.05.

390 MW is not a documented plant nameplate. 15.4 percent is not a measured test derate. The public lesson states the inputs and asks for the percent. The steps above are returned by the grader after submit.
