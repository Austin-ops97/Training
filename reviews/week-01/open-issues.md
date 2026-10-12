# Open issues

These items are taught as flags or left unresolved. They need an instructor or a site confirmation before anyone treats them as settled.

1. **Finer video timestamps.** Timed caption files could not be downloaded (YouTube blocked the caption clients used here). Every required video is embedded for its full listed duration (`start=0`, `end` = Appendix A length in seconds). Those lengths were not re-measured with a media probe. A tighter segment would need a caption file or a human timing pass.

2. **V09 has no retrieved spoken transcript.** Title and channel were confirmed with oEmbed. The clip is embedded, labeled not required, and is not used as a quiz source. The title's 220 MW and 12 engines describe that animation, not Viper Power.

3. **59 MW is an exercise input only.** It is not in discrepancy D11. D11's figures are about 330 MW net at 95°F (SOP 029), a prior-owner figure of about 360 MW, and about 65 MW ISO per unit on the 2024 test. The 1,062 MWh exercise result is not a plant total.

4. **Frame designation (D12).** Documents say 7B, 7E, and 7B/E. S175 is the MS7001B manual. Confirm stage count and uprates with the OEM or PSM before a parts list is frozen.

5. **LEC vendor.** S165 describes LEC in the TTS operator training. The course outline and the external references PSMLEC and PSM7B identify the hardware as a PSM retrofit rather than GE dry-low-NOx. Week 1 does not quiz combustion mode names. Confirm the as-built vendor.

6. **Controls (D09).** GE manuals in the library describe Speedtronic-era controls and liquid fuel. The plant notes say gas only, with TTS controls on an Allen-Bradley PLC-5. Do not teach the GE control screens as the current system.

7. **Plant one-line is missing (gap G02).** C05.2.1's objective states three-winding 138/13.8/13.8 kV GSUs, two generators each, GSU1–GSU3. Confirm that against the as-built one-line. Who performs 138 kV switching at the transmission service provider interface (C05.2.4, SOP 017) is a confirmation item.

8. **Orientation year.** The orientation objective mentions relocation and commissioning around 2018. That orientation is Revision 0 (2023) and its work-management tools need a check. Treat the year as an orientation statement. Do not add a prior-site name.

9. **No Viper Power heat rate, capacity factor, start-time table, or ERCOT price in Week 1.** Do not fill those from the videos (DTE 7HA weight, INNIO marketing counts, Ecotricity's British 10 MW / 24 MWh project, Wärtsilä's 220 MW, Hoover Dam, TED-Ed solar percentages, or the Belgian plant's temperatures and rod time).

10. **EIA and protocol dates.** Table 6.07.A and 6.07.B values for 2025 and 2026 are marked preliminary in the workbook downloaded for this lesson. The QSE wording is from the 28 August 2026 Nodal Protocols compilation, Section 2 and Section 1.6.2, plus the ERCOT QSE and about pages reviewed 12 October 2026. Re-check those pages if the lesson is reused after a protocol or Electric Power Monthly revision.

11. **Dependency audit.** `npm` reported that `eslint@9.39.5` is deprecated and that the install has audit findings. `npm audit fix --force` was not run. The test, lint, and production build used the locked versions.
