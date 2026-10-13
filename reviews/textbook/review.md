# Textbook course rebuild

Reviewed 2026-10-13 UTC, corresponding to 2026-10-12 in Texas. Starting repository commit: 43ca85a372c9e1281c62fd185395c29800689f60.

## Scope and teaching sequence

The project-manager course is now the primary experience: sixteen fully written chapters in five parts. Explanations establish physical meaning before equations, then connect the mechanism to plant equipment and project decisions. The thermodynamic cycle and operating sequence are taught separately. Chapters 1–12 trace the simple-cycle process and its support; Chapter 13 compares technologies; Chapters 14–16 connect performance, markets, and project scope.

The original five-day lessons and operator outline remain accessible. Existing technical depth is represented in the new text, including Ohm's law, series/parallel circuits, resistivity, I²R losses, MW/MWh, pole-speed relationships, three-phase power, Brayton/Rankine models, heat recovery, capacity basis, efficiency, heat rate, and capacity factor. National historical percentage tables remain in the original references rather than becoming foundational recall requirements.

## Corrections

- 60 Hz is 60 complete cycles per second. Sinusoidal current changes direction twice per cycle. Original question d1q11 and its answer key now agree.
- A power plant converts energy; it does not manufacture charge.
- An AC generator nameplate voltage is normally RMS line-to-line voltage, not a steady per-coulomb energy delivery. The original d1q3 now specifies a steady potential difference.
- Instantaneous p(t) = v(t)i(t) differs from AC average real power. The course includes the balanced sinusoidal three-phase relationship and power factor.
- The governor/fuel system chiefly changes real power after grid connection; AVR/excitation chiefly influences voltage/reactive output. The new course distinguishes this from isolated/no-load speed control.
- Electricity/energy storage is possible. Ordinary wires do not provide a bulk reservoir eliminating continuous balance.
- The gas/steam paths are separate from shaft-work links in new diagrams. The working fluid never passes through the generator.
- Differences between unlike gross/net and ambient-condition capacity figures are not labeled measured derates.
- Availability, capacity factor, and efficiency are treated as different quantities.
- ERCOT day-ahead energy positions are financial. A simplified two-settlement teaching example explicitly states its omissions and matching-boundary assumptions.

## Videos

All fourteen existing videos are retained, each once in the textbook course. Fresh oEmbed title/channel checks succeeded; results are in video-metadata-check.json. V06 follows the complete gas-turbine explanation; V01/V02 follow electrical delivery; V03–V05 and V07–V13 accompany Chapter 13 comparisons; V14 accompanies grid/market roles. V09 is an optional engine-plant illustration.

Practical Engineering's own written transcript at https://practical.engineering/blog/2019/6/24/how-does-the-power-grid-work was freshly inspected. It contains misleading 60 Hz and storage statements. Both are corrected adjacent to its player. The clip remains useful for the physical delivery overview.

Other narration reviews are inherited from reviews/week-01/videos.md. Fresh complete timed transcripts were not retrieved. Metadata alone is not verification of all narration. V09 has no retrieved spoken transcript and supplies no assessed fact. Historical efficiencies, local ratings, promotional savings, costs, and example plant dimensions are not transferred into this plant's specifications. New players do not use unverified duration/end timestamps. Written teaching and review answers do not require video playback.

## Sources and limits

Chapter references distinguish public physical principles from inherited plant descriptions. Fresh source inspection included OpenStax generator/transformer material; DOE gas-turbine and instrumentation references; NETL axial-compressor material; DOE pumping-system material; EIA delivery and heat-rate material; GE combined-cycle explanation; EPA CHP material; ERCOT QSE/day-ahead pages; and FERC regional market descriptions.

The former GE GER-3567H PDF URL redirects to a resource directory. It is labeled accordingly; no freshly retrieved performance curve or unit guarantee is claimed. Original plant manuals and the as-built one-line are absent from this checkout. Frame labels, combustion retrofit vendor/configuration, controls, shared transformer arrangement, and mismatched rating bases remain inherited evidence requiring confirmation.

## Validation

- All 28 tests pass; TypeScript checks and Next.js production build pass.
- All chapter routes are prerendered; original dynamic references and grading remain available.
- Tests cover prerequisite ordering, valid source ids, complete video mapping, rendered chapter anchors, previous/next links, unknown routes, cumulative feedback links, review scoring, malformed storage, preservation of notes/results, and blocked-storage behavior.
- Browser visual/interaction QA was not available: managed environment had no control-browser skill. No browser was installed and no local preview server was launched. Responsive CSS and server-rendered markup were checked, but actual browser playback, storage interactions, and visual appearance still need a human pass.

The course is formative education, not a qualified operating procedure or certification. Local notes and progress are independent of the original Week 1 progress store.
