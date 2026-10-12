# Open issues

These items are taught as flags or left unresolved. They need an instructor or a site confirmation before anyone treats them as settled.

1. **Finer video timestamps.** Timed caption files could not be downloaded (YouTube blocked the caption clients used here). Every required video is embedded for its full listed duration (`start=0`, `end` = Appendix A length in seconds). Those lengths were not re-measured with a media probe. A tighter segment would need a caption file or a human timing pass.

2. **V09 has no retrieved spoken transcript.** Accepted (W1-L7). Title and channel were confirmed with oEmbed. The clip stays embedded, labeled not required, and is not used as a quiz source. The title's 220 MW and 12 engines describe that animation, not Viper Power.

3. **59 MW is an exercise input only.** It is not in discrepancy D11. D11's figures are about 330 MW net at 95°F (SOP 029), a prior-owner figure of about 360 MW, and about 65 MW ISO per unit on the 2024 test. The 1,062 MWh exercise result is not a plant total. The learner sees that caveat once, in the exercise, and again as the merged Day 1 knowledge-check item. Inventory ids stay in this file.

4. **Frame designation (D12).** Documents say 7B, 7E, and 7B/E. S175 is the MS7001B manual. Confirm stage count and uprates with the OEM or PSM before a parts list is frozen. The lesson says the documents disagree and asks for confirmation. It does not print D12.

5. **LEC vendor.** S165 describes LEC in the TTS operator training. The course outline and the external references PSMLEC and PSM7B identify the hardware as a PSM retrofit rather than GE dry-low-NOx. Week 1 does not quiz combustion mode names. Confirm the as-built vendor.

6. **Controls (D09).** GE manuals in the library describe older controls and liquid fuel. The plant notes say gas only, with TTS controls on an Allen-Bradley PLC-5. The lesson tells the reader to use the GE books for the mechanical machine. It does not print D09.

7. **Plant one-line is missing (gap G02).** C05.2.1's objective states three-winding 138/13.8/13.8 kV GSUs, two generators each, GSU1–GSU3. Confirm that against the as-built one-line. Who performs 138 kV switching at the transmission service provider interface (C05.2.4, SOP 017) is a confirmation item. The lesson states the confirmation without the inventory ids.

8. **No Viper Power heat rate, capacity factor, start-time table, or ERCOT price in Week 1.** Those are not filled from the videos (DTE 7HA weight, INNIO marketing counts, Ecotricity's British 10 MW / 24 MWh project, Wärtsilä's 220 MW, Hoover Dam, TED-Ed solar percentages, or the Belgian plant's temperatures and rod time).

9. **Day 3 comparison table omits start time and efficiency.** Accepted deviation (W1-L4). The outline's line that aeroderivatives start in about 5–10 minutes is not backed by a source in this pack, so the exercise has no start-time column and no efficiency column. Nothing was invented to fill them.

10. **EIA and protocol dates.** Table 6.07.A and 6.07.B values for 2025 and 2026 are marked preliminary in the workbook downloaded 12 October 2026. July 2026 gas turbines are 0.233. The QSE wording is from the Nodal Protocol files whose headers read August 1, 2026: Section 2 at `https://www.ercot.com/files/docs/2024/06/28/02-080126_Nodal.docx` and Section 1.6.2 at `https://www.ercot.com/files/docs/2023/01/26/01-080126_Nodal.docx`, plus the ERCOT QSE and about pages reviewed the same day. Re-check those pages if the lesson is reused after a protocol or Electric Power Monthly revision.

11. **Answer key remains in the repository.** Accepted (W1-L2). `content/week-01/answer-key.ts` is in the public repo, and `POST /api/quiz/grade` returns the correct choice id after a student submits. The page does not ship the key in the client bundle. Grading compares choice ids, so a shuffled display still scores the same answer. No further architecture change was made.

12. **Remaining dependency advisories.** PostCSS is overridden to 8.5.29. Vitest is pinned at 4.1.11, which clears the critical tinypool findings and the moderate mocker finding that `npm audit` reported against Vitest 3. `npm audit` on 12 October 2026 reports 5 high and 0 critical. `npm audit --omit=dev` reports 0. The five high findings are dev-only, all one chain: `braces` ≤3.0.3, pulled in by `micromatch`, `fast-glob`, and `@next/eslint-plugin-next` inside `eslint-config-next` 15.5.27. The newest published `braces` is 3.0.3, which is still inside that advisory, and the Next 16 plugin still depends on `fast-glob` 3.3.1. The only fix `npm audit` offers is a downgrade of `eslint-config-next` to 14.2.35. That is a major downgrade away from this Next 15 app, so it was not applied. `npm audit fix --force` was not run.
