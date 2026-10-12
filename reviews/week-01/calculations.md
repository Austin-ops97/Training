# Worked calculations

Every arithmetic step taught in Week 1 is below. Graded items are also in [assessments.md](assessments.md). Figures that are not a Viper Power measurement are labeled.

## Day 1 — charge, current, resistance, power, and heating

Sources for the definitions are OpenStax College Physics 2e (chapters 18–21) and the SI Brochure. The elementary-charge digits in the lesson are the exact SI defining constant. OpenStax rounds the same charge to 1.60×10⁻¹⁹ C.

### Checkpoint d1c1 (graded)

I = Q / t = 180 C / 60 s = **3 A**.

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

## Day 1 — line loss (level 1, taught, not a separate numeric grade)

For the same power, current = power / voltage. Heating in the line follows current squared.

Double the voltage and the current is cut in half. (1/2)² = 1/4, so heating loss falls to **one quarter** if the resistance is unchanged.

The Crash Course example voltages (about 12,000 V, about 240,000 V, 110 V) are illustrations. They are not Viper Power voltages. The inventory voltages used later are 13.8 kV (S105) and 138 kV (S136).

## Day 1 — synchronous speed (level 3, taught, not graded)

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
