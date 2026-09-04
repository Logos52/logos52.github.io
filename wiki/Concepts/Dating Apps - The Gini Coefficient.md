---
title: "Dating Apps - The Gini Coefficient"
type: concept
status: developing
created: 2026-09-04
updated: 2026-09-05
written-by: fable
method: fable-5.1-one-pass
diagrams: scripts/gen-dating-gini-diagrams.py
model: fable
source-count: 1
description: "One number between 0 and 1 for how unevenly the likes women send land on the men. On Hinge in 2017 it came out at 0.542 for men, near apartheid-era South Africa. It says nothing about how few women are on the app, and part of it is made by the swipe itself, because rating a man and writing to him are one motion."
tags:
  - dating-apps
  - gini-coefficient
  - inequality
  - two-sided-markets
  - statistics
  - gender
---

# Dating Apps - The Gini Coefficient

The Gini coefficient of a dating app is one number, between 0 and 1, for how unevenly the likes that women send land on the men. On Hinge in 2017 it came out at 0.542 for the men, which on the list economists keep for national incomes sits near apartheid-era South Africa. One of Hinge's own engineers ran it on the app's own record of every like and published it. He kept his job, the post stayed up, and the company changed nothing about the product. The number turns the thing a man feels on the app, an inbox that stays empty however much he swipes, into a measurement. A measurement can be compared across apps and over years. It is also narrower than the way it gets quoted. It says how the likes are shared out among the men, and nothing about how few women are there to send them. Part of it is made by the swipe itself, because on a swipe app rating a man and writing to him are one motion.

A 2026 video about the dating app business opens on a man of 28 in Phoenix who checks three apps at seven in the morning and finds nothing new. Tinder has no matches for him. Hinge has one match from eleven days ago who never wrote back. Bumble still shows a woman who matched with him nine months ago and has never said a word. Over six months he has paid the three apps $287 and swiped right on 14,000 women. He matched with 41, talked with nine, met three, and went home alone from all three dinners. There is nothing wrong with his photos or his profile. Each month he pays the company that owns Tinder and Hinge more than he pays for Netflix, Spotify, and electricity together. Hinge's own data says six months like his are what an ordinary man should expect.

**Contents:** [The number](#the-number) · [What the spread looks like in likes](#what-the-spread-looks-like-in-likes) · [The fact the number leaves out](#the-fact-the-number-leaves-out) · [Why the swipe pushes the number up](#why-the-swipe-pushes-the-number-up) · [Who pays for the spread](#who-pays-for-the-spread) · [Where the men went](#where-the-men-went) · [What the number can carry](#what-the-number-can-carry) · [What the number is for](#what-the-number-is-for)

## The number

- Denmark's income sits near 0.28, the United States near 0.41, and South Africa near 0.63.
- Women on Hinge, counting the likes they got from men: 0.376. Men on Hinge, counting the likes they got from women: 0.542.
- Men on Tinder, from outside researchers running the same sum: 0.58.

<!-- diagram:gini_lorenz -->
<svg viewBox="0 0 680 345" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curves of the share of likes against the share of men for Gini 0, 0.376, 0.542, and 0.58" style="max-width:100%;height:auto">
<title>Curves of the share of likes against the share of men for Gini 0, 0.376, 0.542, and 0.58</title>
<text x="60" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">SHARE OF THE LIKES, COUNTED FROM THE MAN WITH THE FEWEST UP</text>
<line x1="60.0" y1="24.0" x2="60.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<line x1="60.0" y1="300.0" x2="400.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="60" y="316" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0%</text>
<text x="54" y="304" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">0%</text>
<line x1="145.0" y1="24.0" x2="145.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<line x1="60.0" y1="231.0" x2="400.0" y2="231.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="145.0" y="316" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">25%</text>
<text x="54" y="235.0" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">25%</text>
<line x1="230.0" y1="24.0" x2="230.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<line x1="60.0" y1="162.0" x2="400.0" y2="162.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="230.0" y="316" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">50%</text>
<text x="54" y="166.0" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">50%</text>
<line x1="315.0" y1="24.0" x2="315.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<line x1="60.0" y1="93.0" x2="400.0" y2="93.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="315.0" y="316" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">75%</text>
<text x="54" y="97.0" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">75%</text>
<line x1="400.0" y1="24.0" x2="400.0" y2="300.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<line x1="60.0" y1="24.0" x2="400.0" y2="24.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="400" y="316" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">100%</text>
<text x="54" y="28" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">100%</text>
<text x="230.0" y="334" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="middle">share of the men, poorest in likes on the left</text>
<text x="18" y="162" font-size="10.5" fill="currentColor" opacity=".78" transform="rotate(-90 18 162)" text-anchor="middle">share of all likes</text>
<line x1="60.0" y1="300.0" x2="400.0" y2="24.0" stroke="rgba(130,130,130,.55)" stroke-width="1.5"/>
<path d="M60.0,300.0 L63.4,297.2 L66.8,294.5 L70.2,291.7 L73.6,289.0 L77.0,286.2 L80.4,283.4 L83.8,280.7 L87.2,277.9 L90.6,275.2 L94.0,272.4 L97.4,269.6 L100.8,266.9 L104.2,264.1 L107.6,261.4 L111.0,258.6 L114.4,255.8 L117.8,253.1 L121.2,250.3 L124.6,247.6 L128.0,244.8 L131.4,242.0 L134.8,239.3 L138.2,236.5 L141.6,233.8 L145.0,231.0 L148.4,228.2 L151.8,225.5 L155.2,222.7 L158.6,220.0 L162.0,217.2 L165.4,214.4 L168.8,211.7 L172.2,208.9 L175.6,206.2 L179.0,203.4 L182.4,200.6 L185.8,197.9 L189.2,195.1 L192.6,192.4 L196.0,189.6 L199.4,186.8 L202.8,184.1 L206.2,181.3 L209.6,178.6 L213.0,175.8 L216.4,173.0 L219.8,170.3 L223.2,167.5 L226.6,164.8 L230.0,162.0 L233.4,159.2 L236.8,156.5 L240.2,153.7 L243.6,151.0 L247.0,148.2 L250.4,145.4 L253.8,142.7 L257.2,139.9 L260.6,137.2 L264.0,134.4 L267.4,131.6 L270.8,128.9 L274.2,126.1 L277.6,123.4 L281.0,120.6 L284.4,117.8 L287.8,115.1 L291.2,112.3 L294.6,109.6 L298.0,106.8 L301.4,104.0 L304.8,101.3 L308.2,98.5 L311.6,95.8 L315.0,93.0 L318.4,90.2 L321.8,87.5 L325.2,84.7 L328.6,82.0 L332.0,79.2 L335.4,76.4 L338.8,73.7 L342.2,70.9 L345.6,68.2 L349.0,65.4 L352.4,62.6 L355.8,59.9 L359.2,57.1 L362.6,54.4 L366.0,51.6 L369.4,48.8 L372.8,46.1 L376.2,43.3 L379.6,40.6 L383.0,37.8 L386.4,35.0 L389.8,32.3 L393.2,29.5 L396.6,26.8 L400.0,24.0 L400.0,24.0 L396.6,33.2 L393.2,42.1 L389.8,50.9 L386.4,59.4 L383.0,67.8 L379.6,75.9 L376.2,83.8 L372.8,91.6 L369.4,99.1 L366.0,106.4 L362.6,113.6 L359.2,120.5 L355.8,127.3 L352.4,133.9 L349.0,140.3 L345.6,146.5 L342.2,152.6 L338.8,158.5 L335.4,164.2 L332.0,169.8 L328.6,175.2 L325.2,180.4 L321.8,185.5 L318.4,190.4 L315.0,195.2 L311.6,199.9 L308.2,204.3 L304.8,208.7 L301.4,212.9 L298.0,216.9 L294.6,220.9 L291.2,224.7 L287.8,228.3 L284.4,231.9 L281.0,235.3 L277.6,238.6 L274.2,241.7 L270.8,244.8 L267.4,247.7 L264.0,250.6 L260.6,253.3 L257.2,255.9 L253.8,258.4 L250.4,260.8 L247.0,263.1 L243.6,265.3 L240.2,267.4 L236.8,269.5 L233.4,271.4 L230.0,273.2 L226.6,275.0 L223.2,276.7 L219.8,278.3 L216.4,279.8 L213.0,281.2 L209.6,282.6 L206.2,283.9 L202.8,285.1 L199.4,286.3 L196.0,287.4 L192.6,288.4 L189.2,289.4 L185.8,290.3 L182.4,291.1 L179.0,291.9 L175.6,292.7 L172.2,293.4 L168.8,294.0 L165.4,294.6 L162.0,295.2 L158.6,295.7 L155.2,296.2 L151.8,296.6 L148.4,297.0 L145.0,297.4 L141.6,297.7 L138.2,298.0 L134.8,298.3 L131.4,298.6 L128.0,298.8 L124.6,299.0 L121.2,299.1 L117.8,299.3 L114.4,299.4 L111.0,299.5 L107.6,299.6 L104.2,299.7 L100.8,299.8 L97.4,299.8 L94.0,299.9 L90.6,299.9 L87.2,299.9 L83.8,300.0 L80.4,300.0 L77.0,300.0 L73.6,300.0 L70.2,300.0 L66.8,300.0 L63.4,300.0 L60.0,300.0 Z" fill="rgba(91,108,176,.10)" stroke="none"/>
<path d="M60.0,300.0 L63.4,300.0 L66.8,300.0 L70.2,299.9 L73.6,299.8 L77.0,299.6 L80.4,299.4 L83.8,299.2 L87.2,298.9 L90.6,298.6 L94.0,298.3 L97.4,297.9 L100.8,297.4 L104.2,296.9 L107.6,296.4 L111.0,295.8 L114.4,295.1 L117.8,294.5 L121.2,293.7 L124.6,292.9 L128.0,292.1 L131.4,291.2 L134.8,290.2 L138.2,289.2 L141.6,288.1 L145.0,287.0 L148.4,285.8 L151.8,284.6 L155.2,283.3 L158.6,282.0 L162.0,280.6 L165.4,279.1 L168.8,277.6 L172.2,276.1 L175.6,274.4 L179.0,272.7 L182.4,271.0 L185.8,269.2 L189.2,267.3 L192.6,265.4 L196.0,263.4 L199.4,261.4 L202.8,259.3 L206.2,257.1 L209.6,254.8 L213.0,252.6 L216.4,250.2 L219.8,247.8 L223.2,245.3 L226.6,242.8 L230.0,240.1 L233.4,237.5 L236.8,234.7 L240.2,231.9 L243.6,229.1 L247.0,226.1 L250.4,223.2 L253.8,220.1 L257.2,217.0 L260.6,213.8 L264.0,210.5 L267.4,207.2 L270.8,203.8 L274.2,200.4 L277.6,196.8 L281.0,193.3 L284.4,189.6 L287.8,185.9 L291.2,182.1 L294.6,178.2 L298.0,174.3 L301.4,170.3 L304.8,166.2 L308.2,162.1 L311.6,157.9 L315.0,153.6 L318.4,149.3 L321.8,144.9 L325.2,140.4 L328.6,135.9 L332.0,131.3 L335.4,126.6 L338.8,121.8 L342.2,117.0 L345.6,112.1 L349.0,107.1 L352.4,102.1 L355.8,97.0 L359.2,91.8 L362.6,86.5 L366.0,81.2 L369.4,75.8 L372.8,70.4 L376.2,64.8 L379.6,59.2 L383.0,53.5 L386.4,47.8 L389.8,41.9 L393.2,36.0 L396.6,30.0 L400.0,24.0" fill="none" stroke="#2f9e8f" stroke-width="2" stroke-opacity="1" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M60.0,300.0 L63.4,300.0 L66.8,300.0 L70.2,300.0 L73.6,300.0 L77.0,300.0 L80.4,300.0 L83.8,300.0 L87.2,299.9 L90.6,299.9 L94.0,299.9 L97.4,299.8 L100.8,299.8 L104.2,299.7 L107.6,299.6 L111.0,299.5 L114.4,299.4 L117.8,299.3 L121.2,299.1 L124.6,299.0 L128.0,298.8 L131.4,298.6 L134.8,298.3 L138.2,298.0 L141.6,297.7 L145.0,297.4 L148.4,297.0 L151.8,296.6 L155.2,296.2 L158.6,295.7 L162.0,295.2 L165.4,294.6 L168.8,294.0 L172.2,293.4 L175.6,292.7 L179.0,291.9 L182.4,291.1 L185.8,290.3 L189.2,289.4 L192.6,288.4 L196.0,287.4 L199.4,286.3 L202.8,285.1 L206.2,283.9 L209.6,282.6 L213.0,281.2 L216.4,279.8 L219.8,278.3 L223.2,276.7 L226.6,275.0 L230.0,273.2 L233.4,271.4 L236.8,269.5 L240.2,267.4 L243.6,265.3 L247.0,263.1 L250.4,260.8 L253.8,258.4 L257.2,255.9 L260.6,253.3 L264.0,250.6 L267.4,247.7 L270.8,244.8 L274.2,241.7 L277.6,238.6 L281.0,235.3 L284.4,231.9 L287.8,228.3 L291.2,224.7 L294.6,220.9 L298.0,216.9 L301.4,212.9 L304.8,208.7 L308.2,204.3 L311.6,199.9 L315.0,195.2 L318.4,190.4 L321.8,185.5 L325.2,180.4 L328.6,175.2 L332.0,169.8 L335.4,164.2 L338.8,158.5 L342.2,152.6 L345.6,146.5 L349.0,140.3 L352.4,133.9 L355.8,127.3 L359.2,120.5 L362.6,113.6 L366.0,106.4 L369.4,99.1 L372.8,91.6 L376.2,83.8 L379.6,75.9 L383.0,67.8 L386.4,59.4 L389.8,50.9 L393.2,42.1 L396.6,33.2 L400.0,24.0" fill="none" stroke="#5b6cb0" stroke-width="2" stroke-opacity="1" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M60.0,300.0 L63.4,300.0 L66.8,300.0 L70.2,300.0 L73.6,300.0 L77.0,300.0 L80.4,300.0 L83.8,300.0 L87.2,300.0 L90.6,300.0 L94.0,300.0 L97.4,299.9 L100.8,299.9 L104.2,299.9 L107.6,299.8 L111.0,299.8 L114.4,299.7 L117.8,299.6 L121.2,299.6 L124.6,299.5 L128.0,299.4 L131.4,299.2 L134.8,299.1 L138.2,298.9 L141.6,298.7 L145.0,298.5 L148.4,298.3 L151.8,298.0 L155.2,297.7 L158.6,297.4 L162.0,297.0 L165.4,296.6 L168.8,296.2 L172.2,295.7 L175.6,295.2 L179.0,294.7 L182.4,294.1 L185.8,293.4 L189.2,292.8 L192.6,292.0 L196.0,291.2 L199.4,290.4 L202.8,289.4 L206.2,288.5 L209.6,287.4 L213.0,286.3 L216.4,285.1 L219.8,283.9 L223.2,282.6 L226.6,281.1 L230.0,279.7 L233.4,278.1 L236.8,276.4 L240.2,274.7 L243.6,272.8 L247.0,270.9 L250.4,268.8 L253.8,266.7 L257.2,264.4 L260.6,262.1 L264.0,259.6 L267.4,257.0 L270.8,254.3 L274.2,251.5 L277.6,248.5 L281.0,245.4 L284.4,242.2 L287.8,238.8 L291.2,235.3 L294.6,231.7 L298.0,227.9 L301.4,223.9 L304.8,219.8 L308.2,215.5 L311.6,211.1 L315.0,206.5 L318.4,201.7 L321.8,196.7 L325.2,191.6 L328.6,186.3 L332.0,180.8 L335.4,175.1 L338.8,169.2 L342.2,163.1 L345.6,156.8 L349.0,150.2 L352.4,143.5 L355.8,136.5 L359.2,129.4 L362.6,122.0 L366.0,114.3 L369.4,106.4 L372.8,98.3 L376.2,89.9 L379.6,81.3 L383.0,72.4 L386.4,63.3 L389.8,53.9 L393.2,44.2 L396.6,34.2 L400.0,24.0" fill="none" stroke="#5b6cb0" stroke-width="2" stroke-opacity="0.45" stroke-linejoin="round" stroke-linecap="round"/>
<text x="430" y="40" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">THE LINES</text>
<line x1="430.0" y1="56.0" x2="452.0" y2="56.0" stroke="rgba(130,130,130,.55)" stroke-width="1.5"/>
<text x="458" y="60" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">everyone gets the same: Gini 0</text>
<line x1="430.0" y1="80.0" x2="452.0" y2="80.0" stroke="#2f9e8f" stroke-width="2"/>
<text x="458" y="84" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">women on Hinge, likes from men: 0.376</text>
<line x1="430.0" y1="104.0" x2="452.0" y2="104.0" stroke="#5b6cb0" stroke-width="2"/>
<text x="458" y="108" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men on Hinge, likes from women: 0.542</text>
<line x1="430.0" y1="128.0" x2="452.0" y2="128.0" stroke="#5b6cb0" stroke-width="2" stroke-opacity=".45"/>
<text x="458" y="132" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men on Tinder: 0.58</text>
<rect x="430.0" y="146.0" width="22.0" height="12.0" rx="2" fill="rgba(91,108,176,0.1)"/>
<text x="458" y="156" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">the shaded gap is the Gini:</text>
<text x="458" y="172" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">the bigger the gap, the more</text>
<text x="458" y="188" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">the likes sit with a few men</text>
<text x="430" y="220" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">Read the indigo line at 50% of men:</text>
<text x="430" y="236" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">the poorer half holds about 10% of the likes.</text>
<text x="430" y="262" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">Each line is the curve that has exactly</text>
<text x="430" y="278" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">that Gini; the page's real split is in</text>
<text x="430" y="294" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">the next figure.</text>
</svg>
<!-- /diagram -->

The Gini coefficient is one number between 0 and 1 for how evenly something is shared across a group of people, and it was built for income. At 0 every person has exactly the same amount. At 1 one person has everything and everyone else has nothing. Denmark's income sits near 0.28. The United States sits near 0.41, which is high for a rich country. South Africa, the most unequal country measured, sits near 0.63. So the whole range that real countries occupy is about a third of the scale.

<!-- diagram:gini_scale -->
<svg viewBox="0 0 680 246" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gini values of three countries' incomes and of likes received on Hinge and Tinder" style="max-width:100%;height:auto">
<title>Gini values of three countries' incomes and of likes received on Hinge and Tinder</title>
<text x="230" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">GINI, 0 = EVERYONE THE SAME, 1 = ONE PERSON HAS EVERYTHING</text>
<line x1="230.0" y1="22.0" x2="230.0" y2="190.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="230" y="204" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0.00</text>
<line x1="332.5" y1="22.0" x2="332.5" y2="190.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="332.5" y="204" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0.25</text>
<line x1="435.0" y1="22.0" x2="435.0" y2="190.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="435.0" y="204" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0.50</text>
<line x1="537.5" y1="22.0" x2="537.5" y2="190.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="537.5" y="204" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0.75</text>
<line x1="640.0" y1="22.0" x2="640.0" y2="190.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="640" y="204" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">1.00</text>
<text x="222" y="39" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Denmark, income</text>
<g><title>Denmark's income Gini: about 0.28</title><rect x="230.0" y="28.0" width="114.8" height="14.0" rx="3" fill="rgba(130,130,130,.55)"/></g>
<text x="350.8" y="39" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.28</text>
<text x="222" y="65" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">women on Hinge, likes from men</text>
<g><title>Women on Hinge: 0.376</title><rect x="230.0" y="54.0" width="154.2" height="14.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="390.15999999999997" y="65" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.376</text>
<text x="222" y="91" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">United States, income</text>
<g><title>United States income Gini: about 0.41</title><rect x="230.0" y="80.0" width="168.1" height="14.0" rx="3" fill="rgba(130,130,130,.55)"/></g>
<text x="404.1" y="91" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.41</text>
<text x="222" y="117" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">men on Hinge, likes from women</text>
<g><title>Men on Hinge: 0.542</title><rect x="230.0" y="106.0" width="222.2" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="458.22" y="117" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.542</text>
<text x="222" y="143" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">men on Tinder, likes from women</text>
<g><title>Men on Tinder: 0.58</title><rect x="230.0" y="132.0" width="237.8" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="473.79999999999995" y="143" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.58</text>
<text x="222" y="169" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">South Africa, income</text>
<g><title>South Africa's income Gini: about 0.63</title><rect x="230.0" y="158.0" width="258.3" height="14.0" rx="3" fill="rgba(130,130,130,.55)"/></g>
<text x="494.3" y="169" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.63</text>
<rect x="230.0" y="224.0" width="10.0" height="10.0" rx="2" fill="rgba(47,158,143,1.0)"/><text x="245" y="232" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">women on an app</text>
<rect x="370.0" y="224.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,1.0)"/><text x="385" y="232" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men on an app</text>
<rect x="500.0" y="224.0" width="10.0" height="10.0" rx="2" fill="rgba(130,130,130,.55)"/><text x="515" y="232" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">a country's income</text>
</svg>
<!-- /diagram -->

In 2017 an engineer at Hinge ran the same arithmetic on likes, treating each man on the app as a person and the likes he received from women as his income, and then the other way round, with each woman a person and her likes from men as her income. The women's Gini came out at 0.376, about the level of income inequality in a Western European country. The men's came out at 0.542. On the list of 149 countries in the CIA World Factbook, a public reference book of country statistics, 0.542 would be the eighth most unequal economy on earth. He wrote that the men's side of his app looked like apartheid and perpetual civil war, and he published the analysis online. Outside researchers then ran the same calculation on Tinder's data and got 0.58 for men, more unequal than 95% of the countries on that list. He kept his job, the post stayed up, and the product did not change.

## What the spread looks like in likes

- Half of all the likes women send go to the top 15% of men.
- The top 1% of men on Hinge receive 16% of every like sent.
- An average man's right swipe becomes a match 0.87% of the time.

<!-- diagram:likes_split -->
<svg viewBox="0 0 680 180" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One hundred men against the one hundred likes women send them: the top 15% of men take half" style="max-width:100%;height:auto">
<title>One hundred men against the one hundred likes women send them: the top 15% of men take half</title>
<text x="150" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">THE MEN, BY HOW MANY LIKES THEY GET</text>
<text x="142" y="37" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">100 men</text>
<g><title>men: top 1% of men, 1%</title><rect x="150.0" y="22.0" width="2.9" height="22.0" rx="3" fill="rgba(91,108,176,0.95)"/></g>
<g><title>men: next 14%, 14%</title><rect x="154.9" y="22.0" width="66.6" height="22.0" rx="3" fill="rgba(91,108,176,0.7)"/></g>
<text x="188.2" y="37" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">14%</text>
<g><title>men: next 35%, 35%</title><rect x="223.5" y="22.0" width="169.5" height="22.0" rx="3" fill="rgba(91,108,176,0.45)"/></g>
<text x="308.25" y="37" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">35%</text>
<g><title>men: bottom half, 50%</title><rect x="395.0" y="22.0" width="243.0" height="22.0" rx="3" fill="rgba(91,108,176,0.2)"/></g>
<text x="516.5" y="37" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">50%</text>
<text x="150" y="70" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">THE LIKES WOMEN SEND</text>
<text x="142" y="93" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">100 likes</text>
<g><title>likes: to the top 1% of men, 16%</title><rect x="150.0" y="78.0" width="76.4" height="22.0" rx="3" fill="rgba(91,108,176,0.95)"/></g>
<text x="188.2" y="93" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">16%</text>
<g><title>likes: to the next 14%, 34%</title><rect x="228.4" y="78.0" width="164.6" height="22.0" rx="3" fill="rgba(91,108,176,0.7)"/></g>
<text x="310.7" y="93" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">34%</text>
<g><title>likes: to the next 35%, 50%</title><rect x="395.0" y="78.0" width="243.0" height="22.0" rx="3" fill="rgba(91,108,176,0.45)"/></g>
<text x="516.5" y="93" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">50%</text>
<g><title>likes: to the bottom half, 0%</title><rect x="640.0" y="78.0" width="0.0" height="22.0" rx="3" fill="rgba(91,108,176,0.2)"/></g>
<text x="150" y="124" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The top 1% of men, one bar so thin it is a sliver on the top row, takes 16 of every 100 likes.</text>
<text x="150" y="140" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The top 15% together take 50. The bottom half of men gets almost nothing, so it has no bar on the second row.</text>
<rect x="150.0" y="158.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,0.95)"/><text x="165" y="166" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">top 1%</text>
<rect x="230.0" y="158.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,0.7)"/><text x="245" y="166" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">next 14%</text>
<rect x="320.0" y="158.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,0.45)"/><text x="335" y="166" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">next 35%</text>
<rect x="410.0" y="158.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,0.2)"/><text x="425" y="166" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">bottom half</text>
</svg>
<!-- /diagram -->

Half of all the likes that women send on these apps go to the top 15% of men, so the other 85% of men divide the other half between them. On Hinge the top 1% of men receive 16% of every like sent, and the bottom half of men receive almost nothing at all. An analyst who built on the Hinge numbers put an average man's chance of a match at 0.87% per right swipe. A 0.87% chance is fewer than one match for every 100 women he swipes right on.

<!-- diagram:swipe_rates -->
<svg viewBox="0 0 680 190" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two grids of one hundred: a woman likes under 5 of 100 men, a man likes 62 of 100 women" style="max-width:100%;height:auto">
<title>Two grids of one hundred: a woman likes under 5 of 100 men, a man likes 62 of 100 women</title>
<text x="40" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">OF 100 MEN A WOMAN IS SHOWN, SHE LIKES</text>
<g><title>A woman likes fewer than 5 of every 100 men she is shown</title><rect x="40" y="132" width="9" height="9" rx="2" fill="rgba(47,158,143,.95)"/><rect x="52" y="132" width="9" height="9" rx="2" fill="rgba(47,158,143,.95)"/><rect x="64" y="132" width="9" height="9" rx="2" fill="rgba(47,158,143,.95)"/><rect x="76" y="132" width="9" height="9" rx="2" fill="rgba(47,158,143,.95)"/><rect x="88" y="132" width="9" height="9" rx="2" fill="rgba(47,158,143,.95)"/><rect x="100" y="132" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="132" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="132" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="132" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="132" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/></g>
<text x="40" y="160" font-size="22" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">fewer than 5</text>
<text x="40" y="178" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">the other 95 get a left swipe</text>
<text x="370" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">OF 100 WOMEN A MAN IS SHOWN, HE LIKES</text>
<g><title>A man likes 62 of every 100 women he is shown</title><rect x="370" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="108" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="96" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="84" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="406" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="418" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="430" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="442" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="454" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="466" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="478" y="72" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="370" y="60" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="382" y="60" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="394" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="406" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="418" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="430" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="442" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="454" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="466" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="478" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="370" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="382" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="394" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="406" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="418" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="430" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="442" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="454" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="466" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="478" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="370" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="382" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="394" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="406" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="418" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="430" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="442" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="454" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="466" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="478" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="370" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="382" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="394" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="406" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="418" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="430" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="442" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="454" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="466" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="478" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/></g>
<text x="370" y="160" font-size="22" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">62</text>
<text x="370" y="178" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">the other 38 get a left swipe</text>
</svg>
<!-- /diagram -->

The swiping underneath those figures runs in opposite directions. On Tinder a woman likes fewer than 5 of every 100 men she is shown and a man likes 62 of every 100 women, so in a 2024 set of 294 million swipes from 7,000 real accounts, the average man had swiped right 15,609 times over his whole time on one major app against 2,283 for the average woman. He swipes right seven times as often as she does and ends the month with less than half her matches, 33 against her 81.

<!-- diagram:swipe_volume -->
<svg viewBox="0 0 680 130" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right swipes and matches per month for the average man and the average woman on Tinder" style="max-width:100%;height:auto">
<title>Right swipes and matches per month for the average man and the average woman on Tinder</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">RIGHT SWIPES OVER A WHOLE TIME ON TINDER</text>
<text x="72" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">men</text>
<g><title>Average man: 15,609 right swipes</title><rect x="80.0" y="24.0" width="240.0" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="326.0" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">15,609</text>
<text x="72" y="61" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">women</text>
<g><title>Average woman: 2,283 right swipes</title><rect x="80.0" y="50.0" width="35.1" height="14.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="121.10282529310012" y="61" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">2,283</text>
<text x="370" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">MATCHES A MONTH ON TINDER</text>
<text x="422" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">men</text>
<g><title>Average man: 33 matches a month</title><rect x="430.0" y="24.0" width="85.6" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="521.5555555555555" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">33</text>
<text x="422" y="61" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">women</text>
<g><title>Average woman: 81 matches a month</title><rect x="430.0" y="50.0" width="210.0" height="14.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="646.0" y="61" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">81</text>
<text x="20" y="96" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The man swipes right seven times as often and ends up with less than half the matches.</text>
<rect x="20.0" y="110.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,1.0)"/><text x="35" y="118" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men</text>
<rect x="90.0" y="110.0" width="10.0" height="10.0" rx="2" fill="rgba(47,158,143,1.0)"/><text x="105" y="118" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">women</text>
</svg>
<!-- /diagram -->

## The fact the number leaves out

- Tinder's users are 78% men, Hinge's about 65%, and Bumble's 62.5%.
- In some European markets there are nine men for every woman.
- On Grindr every user is a man, and its revenue grew 25% in the first three months of 2025.

<!-- diagram:ratio -->
<svg viewBox="0 0 680 190" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Men and women out of every hundred users on Tinder, Hinge, Bumble, and some European markets" style="max-width:100%;height:auto">
<title>Men and women out of every hundred users on Tinder, Hinge, Bumble, and some European markets</title>
<text x="190" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">WHO IS ON THE APP, OUT OF EVERY 100 USERS</text>
<text x="182" y="38" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Tinder</text>
<g><title>Tinder: 78 men in 100</title><rect x="190.0" y="24.0" width="349.0" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<g><title>Tinder: 22 women in 100</title><rect x="541.0" y="24.0" width="97.0" height="20.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="198" y="38" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="start">78 men</text>
<text x="634" y="38" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="end">22 women</text>
<text x="182" y="68" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Hinge</text>
<g><title>Hinge: 65 men in 100</title><rect x="190.0" y="54.0" width="290.5" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<g><title>Hinge: 35 women in 100</title><rect x="482.5" y="54.0" width="155.5" height="20.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="198" y="68" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="start">65 men</text>
<text x="634" y="68" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="end">35 women</text>
<text x="182" y="98" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Bumble</text>
<g><title>Bumble: 62.5 men in 100</title><rect x="190.0" y="84.0" width="279.2" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<g><title>Bumble: 37.5 women in 100</title><rect x="471.2" y="84.0" width="166.8" height="20.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="198" y="98" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="start">62.5 men</text>
<text x="634" y="98" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="end">37.5 women</text>
<text x="182" y="128" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">some European markets</text>
<g><title>some European markets: 90 men in 100</title><rect x="190.0" y="114.0" width="403.0" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<g><title>some European markets: 10 women in 100</title><rect x="595.0" y="114.0" width="43.0" height="20.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="198" y="128" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="start">90 men</text>
<text x="616.5" y="128" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="middle">10</text>
<text x="190" y="154" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">Across the big apps for men and women, about two men for every woman.</text>
<rect x="190.0" y="170.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,1.0)"/><text x="205" y="178" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men</text>
<rect x="260.0" y="170.0" width="10.0" height="10.0" rx="2" fill="rgba(47,158,143,1.0)"/><text x="275" y="178" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">women</text>
</svg>
<!-- /diagram -->

The Gini says how the women's likes are spread across the men and nothing about how many women there are to send them, and on these apps there are few. Tinder's users are 78% men, Hinge's about 65% and Bumble's 62.5%, and in some European markets there are nine men for every woman, so across the big apps for men and women, men outnumber women about two to one.

<!-- diagram:two_problems -->
<svg viewBox="0 0 680 240" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two separate problems, the shortage of women and the concentration of likes, combine into a 0.87% match chance per swipe" style="max-width:100%;height:auto">
<title>Two separate problems, the shortage of women and the concentration of likes, combine into a 0.87% match chance per swipe</title>
<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>
<rect x="20" y="30" width="250" height="70" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="145.0" y="54.0" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">half as many women as men</text>
<text x="145.0" y="68.5" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">every man's average is halved</text>
<text x="145.0" y="83.0" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">before anyone swipes</text>
<rect x="20" y="130" width="250" height="70" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="145.0" y="154.0" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">the likes women send</text>
<text x="145.0" y="168.5" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">land on a few men</text>
<text x="145.0" y="183.0" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">this is what the 0.542 measures</text>
<line x1="270.0" y1="65.0" x2="380.0" y2="108.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<line x1="270.0" y1="165.0" x2="380.0" y2="122.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<rect x="385" y="80" width="270" height="70" rx="6" fill="rgba(129,86,166,.10)" stroke="#8156a6" stroke-opacity=".55"/>
<text x="520.0" y="103.66666666666667" font-size="11" fill="currentColor" opacity="0.85" text-anchor="middle">0.87% chance of a match</text>
<text x="520.0" y="118.66666666666667" font-size="11" fill="currentColor" opacity="0.85" text-anchor="middle">per right swipe for the average man</text>
<text x="520.0" y="133.66666666666669" font-size="11" fill="currentColor" opacity="0.85" text-anchor="middle">fewer than 1 in 100</text>
<text x="20" y="228" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The Gini describes only the second box. Fix the first box alone and the average man's matches double while the Gini stays where it is.</text>
</svg>
<!-- /diagram -->

A man on the app is therefore up against two separate problems that stack. There are half as many women as men, which halves the likes an average man can receive before anyone has swiped. And the likes the women do send land on a few men, which is the piling-up the 0.542 measures. The 0.87% match rate is what the two problems produce together. An app with as many women as men but the same piling-up would double the average man's matches while leaving the Gini exactly where it is. Grindr shows what the first problem does on its own, because every user there is a man, so the people looking and the people being looked at are the same set. Grindr's revenue grew 25% in the first three months of 2025 while the apps for men and women shrank.

## Why the swipe pushes the number up

- In 2009 women on a dating site rated about 80% of men as below average, then wrote to a far wider range of men than those ratings.
- On a swipe app, swiping right is both a high rating and the only way to send a message.
- About 60% of women on Bumble set six feet as a minimum height, and about 14.5% of American men are that tall.

<!-- diagram:ratings_vs_messages -->
<svg viewBox="0 0 680 280" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Women rated 80% of men below average but messaged a bell-curve range of them; men rated women on a bell curve" style="max-width:100%;height:auto">
<title>Women rated 80% of men below average but messaged a bell-curve range of them; men rated women on a bell curve</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">HOW WOMEN RATED MEN, 2009</text>
<text x="122" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">below average</text>
<g><title>Women rated 80% of men below average</title><rect x="130.0" y="24.0" width="170.0" height="14.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="306.0" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">80%</text>
<text x="122" y="63" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">average or above</text>
<g><title>20% of men rated average or above</title><rect x="130.0" y="52.0" width="42.5" height="14.0" rx="3" fill="rgba(47,158,143,0.5)"/></g>
<text x="178.5" y="63" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">20%</text>
<text x="20" y="96" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">Half of any group sits below its own middle,</text>
<text x="20" y="110" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">so 80% cannot be true of the group.</text>
<text x="340" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">WHO THOSE WOMEN ACTUALLY MESSAGED</text>
<line x1="340.0" y1="80.0" x2="640.0" y2="80.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<path d="M340.0,79.4 L343.0,79.3 L346.0,79.2 L349.0,79.1 L352.0,78.9 L355.0,78.7 L358.0,78.5 L361.0,78.2 L364.0,77.9 L367.0,77.6 L370.0,77.2 L373.0,76.8 L376.0,76.3 L379.0,75.7 L382.0,75.1 L385.0,74.5 L388.0,73.8 L391.0,73.0 L394.0,72.1 L397.0,71.1 L400.0,70.1 L403.0,69.0 L406.0,67.8 L409.0,66.5 L412.0,65.2 L415.0,63.8 L418.0,62.3 L421.0,60.7 L424.0,59.1 L427.0,57.4 L430.0,55.7 L433.0,53.9 L436.0,52.1 L439.0,50.3 L442.0,48.5 L445.0,46.7 L448.0,44.9 L451.0,43.1 L454.0,41.4 L457.0,39.8 L460.0,38.2 L463.0,36.8 L466.0,35.4 L469.0,34.2 L472.0,33.1 L475.0,32.2 L478.0,31.4 L481.0,30.8 L484.0,30.4 L487.0,30.1 L490.0,30.0 L493.0,30.1 L496.0,30.4 L499.0,30.8 L502.0,31.4 L505.0,32.2 L508.0,33.1 L511.0,34.2 L514.0,35.4 L517.0,36.8 L520.0,38.2 L523.0,39.8 L526.0,41.4 L529.0,43.1 L532.0,44.9 L535.0,46.7 L538.0,48.5 L541.0,50.3 L544.0,52.1 L547.0,53.9 L550.0,55.7 L553.0,57.4 L556.0,59.1 L559.0,60.7 L562.0,62.3 L565.0,63.8 L568.0,65.2 L571.0,66.5 L574.0,67.8 L577.0,69.0 L580.0,70.1 L583.0,71.1 L586.0,72.1 L589.0,73.0 L592.0,73.8 L595.0,74.5 L598.0,75.1 L601.0,75.7 L604.0,76.3 L607.0,76.8 L610.0,77.2 L613.0,77.6 L616.0,77.9 L619.0,78.2 L622.0,78.5 L625.0,78.7 L628.0,78.9 L631.0,79.1 L634.0,79.2 L637.0,79.3 L640.0,79.4" fill="none" stroke="#2f9e8f" stroke-width="2" stroke-opacity="1" stroke-linejoin="round" stroke-linecap="round"/>
<text x="340" y="94" font-size="10" fill="currentColor" opacity="0.6" text-anchor="start">rated low</text>
<text x="640" y="94" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">rated high</text>
<text x="340" y="112" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">close to a bell curve: messages went to a far wider range of men</text>
<text x="340" y="126" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">than the ratings did (shape as the video describes it, no counts given)</text>
<text x="340" y="156" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">HOW MEN RATED WOMEN, 2009</text>
<line x1="340.0" y1="216.0" x2="640.0" y2="216.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<path d="M340.0,215.4 L343.0,215.3 L346.0,215.2 L349.0,215.1 L352.0,214.9 L355.0,214.7 L358.0,214.5 L361.0,214.2 L364.0,213.9 L367.0,213.6 L370.0,213.2 L373.0,212.8 L376.0,212.3 L379.0,211.7 L382.0,211.1 L385.0,210.5 L388.0,209.8 L391.0,209.0 L394.0,208.1 L397.0,207.1 L400.0,206.1 L403.0,205.0 L406.0,203.8 L409.0,202.5 L412.0,201.2 L415.0,199.8 L418.0,198.3 L421.0,196.7 L424.0,195.1 L427.0,193.4 L430.0,191.7 L433.0,189.9 L436.0,188.1 L439.0,186.3 L442.0,184.5 L445.0,182.7 L448.0,180.9 L451.0,179.1 L454.0,177.4 L457.0,175.8 L460.0,174.2 L463.0,172.8 L466.0,171.4 L469.0,170.2 L472.0,169.1 L475.0,168.2 L478.0,167.4 L481.0,166.8 L484.0,166.4 L487.0,166.1 L490.0,166.0 L493.0,166.1 L496.0,166.4 L499.0,166.8 L502.0,167.4 L505.0,168.2 L508.0,169.1 L511.0,170.2 L514.0,171.4 L517.0,172.8 L520.0,174.2 L523.0,175.8 L526.0,177.4 L529.0,179.1 L532.0,180.9 L535.0,182.7 L538.0,184.5 L541.0,186.3 L544.0,188.1 L547.0,189.9 L550.0,191.7 L553.0,193.4 L556.0,195.1 L559.0,196.7 L562.0,198.3 L565.0,199.8 L568.0,201.2 L571.0,202.5 L574.0,203.8 L577.0,205.0 L580.0,206.1 L583.0,207.1 L586.0,208.1 L589.0,209.0 L592.0,209.8 L595.0,210.5 L598.0,211.1 L601.0,211.7 L604.0,212.3 L607.0,212.8 L610.0,213.2 L613.0,213.6 L616.0,213.9 L619.0,214.2 L622.0,214.5 L625.0,214.7 L628.0,214.9 L631.0,215.1 L634.0,215.2 L637.0,215.3 L640.0,215.4" fill="none" stroke="#5b6cb0" stroke-width="2" stroke-opacity="1" stroke-linejoin="round" stroke-linecap="round"/>
<text x="340" y="230" font-size="10" fill="currentColor" opacity="0.6" text-anchor="start">rated low</text>
<text x="640" y="230" font-size="10" fill="currentColor" opacity="0.6" text-anchor="end">rated high</text>
<text x="340" y="248" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">a near-perfect bell curve: a few low, a few high, most in the middle</text>
<rect x="20.0" y="240.0" width="10.0" height="10.0" rx="2" fill="rgba(47,158,143,1.0)"/><text x="35" y="248" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">women rating or messaging men</text>
<rect x="20.0" y="260.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,1.0)"/><text x="35" y="268" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">men rating women</text>
</svg>
<!-- /diagram -->

In 2009 a dating site asked its users to rate the looks of the opposite sex from one to five. Women rated about 80% of men as below average, which cannot be true of any group, since half of any group sits below its own middle. Men rated women on a near-perfect bell curve, with a few at the top, a few at the bottom, and most in the middle. The 80% is the figure people quote. The same study also recorded which men the women actually wrote to. The messages went to a far wider range of men than the ratings did, so the women who had rated four men in five as below average were still writing to many of those men.

<!-- diagram:swipe_collapse -->
<svg viewBox="0 0 680 240" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="On the 2009 site rating and messaging were separate acts; on a swipe app the right swipe is both" style="max-width:100%;height:auto">
<title>On the 2009 site rating and messaging were separate acts; on a swipe app the right swipe is both</title>
<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">THE 2009 DATING SITE: TWO SEPARATE ACTS</text>
<rect x="20" y="24" width="180" height="56" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="110.0" y="48.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">she rates him</text>
<text x="110.0" y="62.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">1 to 5</text>
<line x1="200.0" y1="52.0" x2="240.0" y2="52.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<rect x="242" y="24" width="200" height="56" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="342.0" y="48.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">she decides on her own</text>
<text x="342.0" y="62.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">whether to write to him</text>
<line x1="442.0" y1="52.0" x2="482.0" y2="52.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<rect x="484" y="24" width="170" height="56" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="569.0" y="48.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">a message,</text>
<text x="569.0" y="62.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">to a wide range of men</text>
<text x="20" y="118" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">A SWIPE APP: ONE MOTION DOES BOTH</text>
<rect x="20" y="128" width="300" height="56" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="170.0" y="152.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">swipe left = a low rating</text>
<text x="170.0" y="166.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">no message is possible</text>
<rect x="340" y="128" width="314" height="56" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="497.0" y="152.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">swipe right = a high rating</text>
<text x="497.0" y="166.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">and the only way to write to him</text>
<text x="20" y="212" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The wide messaging from the top row has no way to happen on the bottom row, because a woman can only write to a man she already</text>
<text x="20" y="228" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">rated highly. Part of the 0.542 is that missing path.</text>
</svg>
<!-- /diagram -->

On a swipe app those two acts are one motion. Swiping left is the rating and swiping right is the only way to send a message, so a woman can only write to a man she has already rated highly, and the wider messaging that the 2009 site saw has no way to happen. That fused motion is why the 0.542 is partly a measurement of the app's design, on top of what women want. The same women and the same men, given a form where rating and writing are separate acts, should produce a lower Gini. The video does not report anyone testing such a form.

<!-- diagram:height_filter -->
<svg viewBox="0 0 680 160" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Of one hundred American men about fifteen are six feet or taller, the floor 60% of women on Bumble set" style="max-width:100%;height:auto">
<title>Of one hundred American men about fifteen are six feet or taller, the floor 60% of women on Bumble set</title>
<text x="40" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">100 AMERICAN MEN</text>
<g><title>About 14.5 of every 100 American men are six feet or taller</title><rect x="40" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="52" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="64" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="76" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="88" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="100" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="112" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="124" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="136" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="148" y="132" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="40" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="52" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="64" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="76" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="88" y="120" width="9" height="9" rx="2" fill="rgba(91,108,176,.95)"/><rect x="100" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="120" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="108" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="96" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="84" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="72" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="60" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="48" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="36" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="40" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="52" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="64" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="76" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="88" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="100" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="112" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="124" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="136" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/><rect x="148" y="24" width="9" height="9" rx="2" fill="rgba(130,130,130,.18)"/></g>
<text x="180" y="60" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">about 14.5 in 100 are six feet or taller</text>
<text x="180" y="78" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">(15 squares filled)</text>
<text x="180" y="108" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">About 60% of women on Bumble set six feet as their minimum,</text>
<text x="180" y="124" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">so for those women the other 85 men are gone before any rating happens.</text>
<text x="180" y="148" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">Tinder began selling a height filter to paying users in 2025.</text>
</svg>
<!-- /diagram -->

Filters push the same way. In leaked Bumble data from 2023, about 60% of women had set six feet as their minimum height, and about 14.5% of American men are that tall, so for those women that one floor removes 85% of men before any rating happens and the likes that remain land on a smaller set of men. Tinder began selling a height filter to paying users in 2025.

## Who pays for the spread

- Tinder's paying users fell from 10.4 million in late 2023 to 8.77 million in late 2025 while its revenue stayed flat.
- Tinder's top tier costs $499 a month and lets under 1% of users message without a match.
- A paying man on Tinder averages 13.2 dates a year and a paying woman 32.

<!-- diagram:paying_users -->
<svg viewBox="0 0 680 136" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tinder's paying users fell from 10.4 million to 8.77 million; its top tier costs $499 a month" style="max-width:100%;height:auto">
<title>Tinder's paying users fell from 10.4 million to 8.77 million; its top tier costs $499 a month</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">TINDER'S PAYING USERS, MILLIONS</text>
<text x="82" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">late 2023</text>
<g><title>Late 2023: 10.4 million paying users</title><rect x="90.0" y="24.0" width="230.0" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="326.0" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">10.4 million</text>
<text x="82" y="61" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">late 2025</text>
<g><title>Late 2025: 8.77 million paying users</title><rect x="90.0" y="50.0" width="194.0" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="289.9519230769231" y="61" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">8.77 million</text>
<text x="20" y="96" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">Revenue stayed flat across those two years because the people who stayed were charged more.</text>
<text x="380" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">TINDER'S PRICES A MONTH</text>
<text x="432" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Plus</text>
<g><title>Tinder Plus: about $25 a month</title><rect x="440.0" y="24.0" width="9.0" height="14.0" rx="3" fill="rgba(129,86,166,0.5)"/></g>
<text x="455.0180360721443" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$25</text>
<text x="432" y="59" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Platinum</text>
<g><title>Tinder Platinum: $25 to $50 a month</title><rect x="440.0" y="48.0" width="18.0" height="14.0" rx="3" fill="rgba(129,86,166,0.7)"/></g>
<text x="464.0360721442886" y="59" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$25 to $50</text>
<text x="432" y="83" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Select</text>
<g><title>Tinder Select: $499 a month, by invitation, under 1% of users</title><rect x="440.0" y="72.0" width="180.0" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="626.0" y="83" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$499</text>
<text x="380" y="110" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">Select is by invitation, for under 1% of users. It lets the buyer</text>
<text x="380" y="124" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">message without a match and sit at the top of every queue.</text>
</svg>
<!-- /diagram -->

The men who receive almost nothing are the paying customers. Match Group owns more than forty dating brands, Tinder and Hinge among them, and took in $831 million in the first three months of 2025 with Tinder alone bringing in more than half of it. Tinder's paying users fell from 10.4 million in late 2023 to 8.77 million in late 2025. Its revenue stayed flat over those two years because the people who stayed were charged more. The top of its price ladder, launched in late 2023, is a $499-a-month tier offered by invitation to under 1% of users, and what the $499 buys is the right to message a woman before she has swiped at all and to sit at the top of every woman's queue. A match normally needs both people to swipe right, and the $499 removes that condition for the buyer.

<!-- diagram:dates_per_year -->
<svg viewBox="0 0 680 206" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dates a year for paying men and paying women on Tinder and on Bumble" style="max-width:100%;height:auto">
<title>Dates a year for paying men and paying women on Tinder and on Bumble</title>
<text x="150" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">DATES A YEAR FOR A PAYING USER</text>
<line x1="150.0" y1="22.0" x2="150.0" y2="130.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="150.0" y="144" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<line x1="267.5" y1="22.0" x2="267.5" y2="130.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="267.5" y="144" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">10</text>
<line x1="385.0" y1="22.0" x2="385.0" y2="130.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="385.0" y="144" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">20</text>
<line x1="502.5" y1="22.0" x2="502.5" y2="130.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="502.5" y="144" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">30</text>
<line x1="620.0" y1="22.0" x2="620.0" y2="130.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="620.0" y="144" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">40</text>
<text x="142" y="50" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Tinder</text>
<g><title>Tinder, paying men: 13.2 dates a year</title><rect x="150.0" y="30.0" width="155.1" height="16.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="311.1" y="42" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">13.2</text>
<g><title>Tinder, paying women: 32 dates a year</title><rect x="150.0" y="50.0" width="376.0" height="16.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="532.0" y="62" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">32</text>
<text x="142" y="102" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Bumble</text>
<g><title>Bumble, paying men: 4.8 dates a year</title><rect x="150.0" y="82.0" width="56.4" height="16.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="212.4" y="94" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">4.8</text>
<g><title>Bumble, paying women: 26.8 dates a year</title><rect x="150.0" y="102.0" width="314.9" height="16.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="470.9" y="114" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">26.8</text>
<text x="150" y="170" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">Across the big apps a man pays about five times more per date than a woman does.</text>
<rect x="150.0" y="186.0" width="10.0" height="10.0" rx="2" fill="rgba(91,108,176,1.0)"/><text x="165" y="194" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">paying men</text>
<rect x="260.0" y="186.0" width="10.0" height="10.0" rx="2" fill="rgba(47,158,143,1.0)"/><text x="275" y="194" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">paying women</text>
</svg>
<!-- /diagram -->

What the money buys is uneven too. A paying man on Tinder averages 13.2 dates a year and a paying woman 32, on Bumble the figures are 4.8 and 26.8, and across the big apps a man pays about five times more per date than a woman does. A class action, a lawsuit brought for a whole group of users at once, was filed against Match Group in a California federal court on Valentine's Day 2024. It says the apps are built to work like gambling, with the reward, a match, made rare on purpose. Match Group calls the suit meritless. The companies' own leaders came close to agreeing the next year. In March 2025 the new chief executive of Match Group wrote to staff that the apps had felt like a numbers game rather than a place to build real connections. The same month the founder of Bumble, back as its chief executive, gave an interview. She said that dating apps are rooted in rejection and judgement, and that those are not healthy dynamics. By then Bumble's shares had gone from a peak of $84.80 the day after the 2021 listing toward the $2.61 they closed at in February 2026, a fall of 96.9%, and Match Group's market value from about $45 billion in 2021 to about $10 billion by late 2025.

<!-- diagram:share_price -->
<svg viewBox="0 0 680 110" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bumble's share price fell from $84.80 to $2.61 and Match Group's market value from about $45 billion to about $10 billion" style="max-width:100%;height:auto">
<title>Bumble's share price fell from $84.80 to $2.61 and Match Group's market value from about $45 billion to about $10 billion</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">BUMBLE SHARE PRICE</text>
<text x="142" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Feb 2021, the peak</text>
<g><title>February 2021: $84.80, the day after the listing</title><rect x="150.0" y="24.0" width="150.0" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="306.0" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$84.80</text>
<text x="142" y="63" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Feb 2026</text>
<g><title>February 2026: $2.61</title><rect x="150.0" y="52.0" width="4.6" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="160.61674528301887" y="63" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$2.61</text>
<text x="20" y="96" font-size="14" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">a fall of 96.9%</text>
<text x="370" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">MATCH GROUP MARKET VALUE</text>
<text x="442" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">2021</text>
<g><title>2021: about $45 billion</title><rect x="450.0" y="24.0" width="140.0" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="596.0" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$45 billion</text>
<text x="442" y="63" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">late 2025</text>
<g><title>Late 2025: about $10 billion</title><rect x="450.0" y="52.0" width="31.1" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="487.1111111111111" y="63" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">$10 billion</text>
<text x="370" y="96" font-size="14" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">a fall of about 78%</text>
</svg>
<!-- /diagram -->

## Where the men went

- From 2023 to 2025 young men's use of Tinder, Bumble, and Hinge fell 15% to 22% while young women's use stayed flat.
- The average Character AI user spends 92 to 120 minutes a day on the app, against about 56 minutes on TikTok.
- In 2022, 63% of American men under 30 were single against 34% of women under 30.

<!-- diagram:decline_slopes -->
<svg viewBox="0 0 680 186" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three falls: matches becoming dates, satisfied users, and young men on the apps" style="max-width:100%;height:auto">
<title>Three falls: matches becoming dates, satisfied users, and young men on the apps</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">MATCHES THAT BECAME A DATE</text>
<line x1="20.0" y1="124.0" x2="210.0" y2="124.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<path d="M40.0,42.3 L190.0,88.2" fill="none" stroke="#8156a6" stroke-width="2" stroke-opacity="1.0" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="40.0" cy="42.3" r="5" fill="#8156a6" stroke="rgba(130,130,130,0)"/>
<text x="40" y="32.26086956521739" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">4.8%</text>
<circle cx="190.0" cy="88.2" r="5" fill="#8156a6" stroke="rgba(130,130,130,0)"/>
<text x="190" y="78.2391304347826" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">2.1%</text>
<text x="40" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2020</text>
<text x="190" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2025</text>
<text x="245" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">USERS WHO WERE SATISFIED</text>
<line x1="245.0" y1="124.0" x2="435.0" y2="124.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<path d="M265.0,42.3 L415.0,83.1" fill="none" stroke="#8156a6" stroke-width="2" stroke-opacity="1.0" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="265.0" cy="42.3" r="5" fill="#8156a6" stroke="rgba(130,130,130,0)"/>
<text x="265" y="32.26086956521738" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">44%</text>
<circle cx="415.0" cy="83.1" r="5" fill="#8156a6" stroke="rgba(130,130,130,0)"/>
<text x="415" y="73.13043478260869" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">22%</text>
<text x="265" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2019</text>
<text x="415" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2025</text>
<text x="470" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">YOUNG MEN ON THE APPS</text>
<line x1="470.0" y1="124.0" x2="660.0" y2="124.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<path d="M490.0,42.3 L640.0,60.2" fill="none" stroke="#5b6cb0" stroke-width="2" stroke-opacity="1.0" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="490.0" cy="42.3" r="5" fill="#5b6cb0" stroke="rgba(130,130,130,0)"/>
<text x="490" y="32.26086956521738" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">100</text>
<circle cx="640.0" cy="60.2" r="5" fill="#5b6cb0" stroke="rgba(130,130,130,0)"/>
<text x="640" y="50.24347826086956" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="middle">78</text>
<text x="490" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2023</text>
<text x="640" y="138" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2025</text>
<text x="470" y="160" font-size="10" fill="currentColor" opacity="0.6" text-anchor="start">shown as 100 falling to 78, the low end</text>
<text x="470" y="174" font-size="10" fill="currentColor" opacity="0.6" text-anchor="start">of the 15% to 22% fall the video gives</text>
<text x="20" y="160" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">All three fell by about half or more over the window shown.</text>
</svg>
<!-- /diagram -->

Young men are leaving. From 2023 to 2025 the number of young men using Tinder, Bumble, and Hinge fell by 15% to 22%. The number of young women stayed about flat. That tilts the count of men to women further against the men who stay. Across the apps the share of matches that turned into a date fell from 4.8% in 2020 to 2.1% in 2025. The share of all users who said they were satisfied fell from 44% in 2019 to 22% in 2025.

<!-- diagram:minutes_per_day -->
<svg viewBox="0 0 680 152" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minutes a day on Character AI, 92 to 120, against about 56 on TikTok" style="max-width:100%;height:auto">
<title>Minutes a day on Character AI, 92 to 120, against about 56 on TikTok</title>
<text x="150" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">MINUTES A DAY FOR THE AVERAGE USER</text>
<line x1="150.0" y1="22.0" x2="150.0" y2="84.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="150.0" y="98" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<line x1="267.5" y1="22.0" x2="267.5" y2="84.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="267.5" y="98" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">30</text>
<line x1="385.0" y1="22.0" x2="385.0" y2="84.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="385.0" y="98" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">60</text>
<line x1="502.5" y1="22.0" x2="502.5" y2="84.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="502.5" y="98" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">90</text>
<line x1="620.0" y1="22.0" x2="620.0" y2="84.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="620.0" y="98" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">120</text>
<text x="142" y="42" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Character AI</text>
<g><title>Character AI: 92 to 120 minutes a day</title><rect x="150.0" y="30.0" width="360.3" height="16.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<g><title>the range runs from 92 up to 120 minutes</title><rect x="510.3" y="30.0" width="109.7" height="16.0" rx="3" fill="rgba(129,86,166,0.35)"/></g>
<text x="514.3333333333333" y="42" font-size="10.5" fill="currentColor" opacity="0.95" text-anchor="start">92 to 120</text>
<text x="142" y="70" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">TikTok</text>
<g><title>TikTok: about 56 minutes a day</title><rect x="150.0" y="58.0" width="219.3" height="16.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="375.33333333333337" y="70" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">about 56</text>
<text x="150" y="124" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">One companion app, Replika, passed 40 million users by 2025. The category earned about $82 million in the</text>
<text x="150" y="140" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">first half of 2025 and is growing 64% a year.</text>
</svg>
<!-- /diagram -->

Many of the men who left went to apps that supply a companion made of software. Replika, the first big one, passed 40 million users by 2025, and on Character AI the average user spends 92 to 120 minutes a day against about 56 minutes on TikTok. The companion apps earned about $82 million in the first half of 2025 and are growing 64% a year. Behind those figures sit the births the video opens and closes on. The United States runs near 1.6 births per woman, against the 2.1 that holds a population steady. South Korea was at 0.72 in 2023, Seoul at 0.55, and Tokyo at 0.96.

<!-- diagram:fertility -->
<svg viewBox="0 0 680 178" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Births per woman in the United States, Tokyo, South Korea, and Seoul against the 2.1 that holds a population steady" style="max-width:100%;height:auto">
<title>Births per woman in the United States, Tokyo, South Korea, and Seoul against the 2.1 that holds a population steady</title>
<text x="150" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">BIRTHS PER WOMAN</text>
<line x1="150.0" y1="22.0" x2="150.0" y2="134.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="150.0" y="148" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<line x1="240.4" y1="22.0" x2="240.4" y2="134.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="240.3846153846154" y="148" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0.5</text>
<line x1="330.8" y1="22.0" x2="330.8" y2="134.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="330.7692307692308" y="148" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">1</text>
<line x1="421.2" y1="22.0" x2="421.2" y2="134.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="421.15384615384613" y="148" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">1.5</text>
<line x1="511.5" y1="22.0" x2="511.5" y2="134.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="511.53846153846155" y="148" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2</text>
<text x="142" y="39" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">United States</text>
<g><title>United States: 1.6 births per woman</title><rect x="150.0" y="28.0" width="289.2" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="445.2307692307692" y="39" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">1.6</text>
<text x="142" y="65" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Tokyo</text>
<g><title>Tokyo: 0.96 births per woman</title><rect x="150.0" y="54.0" width="173.5" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="329.53846153846155" y="65" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.96</text>
<text x="142" y="91" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">South Korea, 2023</text>
<g><title>South Korea, 2023: 0.72 births per woman</title><rect x="150.0" y="80.0" width="130.2" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="286.15384615384613" y="91" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.72</text>
<text x="142" y="117" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">Seoul</text>
<g><title>Seoul: 0.55 births per woman</title><rect x="150.0" y="106.0" width="99.4" height="14.0" rx="3" fill="rgba(129,86,166,0.9)"/></g>
<text x="255.4230769230769" y="117" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">0.55</text>
<line x1="529.6" y1="22.0" x2="529.6" y2="134.0" stroke="rgba(130,130,130,.8)" stroke-width="1.5"/>
<text x="529.6153846153845" y="166" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="middle">2.1 births per woman holds a population steady</text>
</svg>
<!-- /diagram -->

<!-- diagram:single_under_30 -->
<svg viewBox="0 0 680 146" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="63% of American men under 30 were single against 34% of women under 30" style="max-width:100%;height:auto">
<title>63% of American men under 30 were single against 34% of women under 30</title>
<text x="40" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">AMERICANS UNDER 30 WHO WERE SINGLE, 2022</text>
<text x="152" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">men under 30</text>
<g><title>63% of men under 30 were single</title><rect x="160.0" y="24.0" width="289.8" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="455.8" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">63%</text>
<text x="152" y="63" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">women under 30</text>
<g><title>34% of women under 30 were single</title><rect x="160.0" y="52.0" width="156.4" height="14.0" rx="3" fill="rgba(47,158,143,0.9)"/></g>
<text x="322.4" y="63" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">34%</text>
<line x1="160.0" y1="22.0" x2="160.0" y2="78.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="160.0" y="92" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0%</text>
<line x1="275.0" y1="22.0" x2="275.0" y2="78.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="275.0" y="92" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">25%</text>
<line x1="390.0" y1="22.0" x2="390.0" y2="78.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="390.0" y="92" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">50%</text>
<line x1="505.0" y1="22.0" x2="505.0" y2="78.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="505.0" y="92" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">75%</text>
<line x1="620.0" y1="22.0" x2="620.0" y2="78.0" stroke="rgba(130,130,130,.18)" stroke-width="1"/>
<text x="620.0" y="92" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">100%</text>
<text x="40" y="118" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">Either young women are pairing with older men, or a small set of young men each hold several</text>
<text x="40" y="134" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">uncommitted partners while the rest hold none.</text>
</svg>
<!-- /diagram -->

One figure reads like a Gini outside the app. In a 2022 survey 63% of American men under 30 were single, against 34% of women under 30. The video reads that gap as partners piling up on a few men the way likes do. Either young women are pairing with older men, or a small set of young men each hold several uncommitted partners while the rest hold none. Run clubs, the in-person replacement for the apps, reproduced the same spread within a few years by the video's account, with the most attractive members getting most of the attention, and the video gives no Gini for run clubs.

## What the number can carry

- A Gini of likes covers the profiles on one app at one moment. A country's income Gini covers every household across a year.
- The women's 0.376 and the men's 0.542 come from two different sets of people, each rated by the other.
- Ten men with likes of 0, 0, 0, 0, 0, 1, 2, 3, 6, and 12 have a Gini of 0.72. When the five men with nothing quit, the same likes give 0.43.

<!-- diagram:computed_over -->
<svg viewBox="0 0 680 300" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A Gini of likes covers one app at one moment; the women's 0.376 and the men's 0.542 are two populations rated by each other" style="max-width:100%;height:auto">
<title>A Gini of likes covers one app at one moment; the women's 0.376 and the men's 0.542 are two populations rated by each other</title>
<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">WHAT EACH GINI IS WORKED OUT OVER</text>
<rect x="20" y="24" width="300" height="64" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="170.0" y="52.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">a Gini of likes</text>
<text x="170.0" y="66.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">the profiles on one app, at one moment</text>
<rect x="360" y="24" width="300" height="64" rx="6" fill="rgba(130,130,130,.18)" stroke="rgba(130,130,130,.35)" stroke-opacity=".55"/>
<text x="510.0" y="52.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">a country's income Gini</text>
<text x="510.0" y="66.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">every household, across a whole year</text>
<text x="20" y="124" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">TWO DIFFERENT SETS OF PEOPLE, EACH RATED BY THE OTHER</text>
<rect x="20" y="134" width="200" height="56" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="120.0" y="158.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">men</text>
<text x="120.0" y="172.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">send likes to women</text>
<line x1="220.0" y1="162.0" x2="300.0" y2="162.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<rect x="302" y="134" width="358" height="56" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="481.0" y="158.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">spread across the women: 0.376</text>
<text x="481.0" y="172.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">this says men spread their likes widely</text>
<rect x="20" y="206" width="200" height="56" rx="6" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".55"/>
<text x="120.0" y="230.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">women</text>
<text x="120.0" y="244.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">send likes to men</text>
<line x1="220.0" y1="234.0" x2="300.0" y2="234.0" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>
<rect x="302" y="206" width="358" height="56" rx="6" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".55"/>
<text x="481.0" y="230.25" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">spread across the men: 0.542</text>
<text x="481.0" y="244.75" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">this says women concentrate theirs</text>
<text x="20" y="288" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The eighth-of-149 ranking says where 0.542 falls on a list built for national incomes. The two app figures never trade with each other.</text>
</svg>
<!-- /diagram -->

The country comparison gives a feel for the size of 0.542 and no more. A Gini of likes is worked out over the profiles on one app at one moment, while a country's income Gini is worked out over every household across a year. So the eighth-of-149 ranking says where 0.542 falls on a list built for national incomes, and nothing about the app itself.

The women's 0.376 and the men's 0.542 describe two different sets of people, each rated by the other. The women's figure says that men spread their likes widely and the men's figure says that women concentrate theirs, so calling the first a Western European economy and the second South Africa puts side by side two measurements that were never taken on the same people.

The Hinge figures come from the company's own engineer on the company's own data. The Tinder 0.58 and the 0.87% match rate reach the video second-hand, from researchers it does not name and from one analyst. A figure that arrives that way is a weaker grade of number.

The video's closing line is that 80% of men lose, meaning they end up with almost none of the likes. The figure behind that line is the top 15% of men taking half the likes, which is the split the Gini summarises.

<!-- diagram:survivorship -->
<svg viewBox="0 0 680 208" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A toy list of ten men shows the Gini falling from 0.72 to 0.43 when the five men with zero likes leave" style="max-width:100%;height:auto">
<title>A toy list of ten men shows the Gini falling from 0.72 to 0.43 when the five men with zero likes leave</title>
<text x="20" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">TEN MEN, LIKES EACH GOT</text>
<g><title>man 1: 0 likes</title><rect x="20.0" y="117.0" width="20.0" height="3.0" rx="1" fill="rgba(91,108,176,0.35)"/></g>
<text x="30" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<g><title>man 2: 0 likes</title><rect x="48.0" y="117.0" width="20.0" height="3.0" rx="1" fill="rgba(91,108,176,0.35)"/></g>
<text x="58" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<g><title>man 3: 0 likes</title><rect x="76.0" y="117.0" width="20.0" height="3.0" rx="1" fill="rgba(91,108,176,0.35)"/></g>
<text x="86" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<g><title>man 4: 0 likes</title><rect x="104.0" y="117.0" width="20.0" height="3.0" rx="1" fill="rgba(91,108,176,0.35)"/></g>
<text x="114" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<g><title>man 5: 0 likes</title><rect x="132.0" y="117.0" width="20.0" height="3.0" rx="1" fill="rgba(91,108,176,0.35)"/></g>
<text x="142" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">0</text>
<g><title>man 6: 1 likes</title><rect x="160.0" y="113.3" width="20.0" height="6.7" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="170" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">1</text>
<g><title>man 7: 2 likes</title><rect x="188.0" y="106.7" width="20.0" height="13.3" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="198" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2</text>
<g><title>man 8: 3 likes</title><rect x="216.0" y="100.0" width="20.0" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="226" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">3</text>
<g><title>man 9: 6 likes</title><rect x="244.0" y="80.0" width="20.0" height="40.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="254" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">6</text>
<g><title>man 10: 12 likes</title><rect x="272.0" y="40.0" width="20.0" height="80.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="282" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">12</text>
<line x1="20.0" y1="120.0" x2="292.0" y2="120.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<text x="20" y="152" font-size="14" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">Gini 0.72</text>
<text x="20" y="168" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">ten men, five of them with nothing</text>
<text x="360" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">THE FIVE WITH NOTHING QUIT</text>
<g><title>man 1: 1 likes</title><rect x="360.0" y="113.3" width="20.0" height="6.7" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="370" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">1</text>
<g><title>man 2: 2 likes</title><rect x="388.0" y="106.7" width="20.0" height="13.3" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="398" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">2</text>
<g><title>man 3: 3 likes</title><rect x="416.0" y="100.0" width="20.0" height="20.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="426" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">3</text>
<g><title>man 4: 6 likes</title><rect x="444.0" y="80.0" width="20.0" height="40.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="454" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">6</text>
<g><title>man 5: 12 likes</title><rect x="472.0" y="40.0" width="20.0" height="80.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="482" y="134" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">12</text>
<line x1="360.0" y1="120.0" x2="492.0" y2="120.0" stroke="rgba(130,130,130,.35)" stroke-width="1"/>
<text x="360" y="152" font-size="14" fill="currentColor" opacity="0.9" text-anchor="start" font-weight="700">Gini 0.43</text>
<text x="360" y="168" font-size="10.5" fill="currentColor" opacity="0.6" text-anchor="start">the same likes, five men</text>
<text x="20" y="196" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">Nobody got one more like, and the number fell from 0.72 to 0.43. A lower Gini in a later report needs this check first.</text>
</svg>
<!-- /diagram -->

The men leaving change the measurement. Suppose the men who quit are the ones who were receiving nothing. Then the Gini among the men still on the app falls, and nobody's chances have improved. So a lower Gini in a future report needs that check before it counts as a fix.

## What the number is for

- The man in Phoenix got 41 matches from 14,000 right swipes. An average man at 0.87% would have had about 120.
- The app's own engineer measured the spread and published it, and the product did not change.

<!-- diagram:phoenix_vs_average -->
<svg viewBox="0 0 680 108" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The man in Phoenix got 41 matches from 14,000 swipes; an average man at 0.87% would get about 120" style="max-width:100%;height:auto">
<title>The man in Phoenix got 41 matches from 14,000 swipes; an average man at 0.87% would get about 120</title>
<text x="40" y="14" font-size="9.5" fill="currentColor" opacity="0.45" text-anchor="start" font-weight="700" letter-spacing=".09em">MATCHES FROM 14,000 RIGHT SWIPES</text>
<text x="182" y="35" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">the man in Phoenix</text>
<g><title>The man in Phoenix: 41 matches from 14,000 right swipes</title><rect x="190.0" y="24.0" width="125.9" height="14.0" rx="3" fill="rgba(91,108,176,0.9)"/></g>
<text x="321.92857142857144" y="35" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">41</text>
<text x="182" y="63" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="end">an average man at 0.87%</text>
<g><title>An average man at 0.87% per swipe: about 122 matches</title><rect x="190.0" y="52.0" width="374.7" height="14.0" rx="3" fill="rgba(91,108,176,0.5)"/></g>
<text x="570.7142857142858" y="63" font-size="10.5" fill="currentColor" opacity="0.9" text-anchor="start">about 120</text>
<text x="40" y="96" font-size="10.5" fill="currentColor" opacity="0.78" text-anchor="start">The average is already under one match per hundred swipes. He sits below it.</text>
</svg>
<!-- /diagram -->

The man in Phoenix closed his accounts in the end, stopped paying, joined a run club, and is still alone. The Gini turns his six months from a story about one man into one draw from a spread that was measured. At the 0.87% rate an average man would have had about 120 matches from his 14,000 right swipes, and he had 41. So he sits below an average that is already under one match per hundred swipes. His empty inbox is the shortage of women and the piling-up of their likes stacked on each other. Hinge's own engineer measured that spread and published it, the company left the post online, and the product did not change, so a fix would show up in the number. The video's own data points at two ways to move it, separating the rating from the message again or bringing the number of women and men closer to even. The run clubs and companion apps the men have moved to change nothing about how many women there are, and the video says the run clubs already show the same spread of attention, so the early signs from them are not encouraging.

## Links into the knowledge base

- [[wiki/Concepts/Probability Distributions|Probability Distributions]] — the pictures there of distributions where a few items take most of the total, which is the shape of likes per profile that a high Gini records as one figure.
- [[wiki/Worldviews & the Political Order/Per Capita|Per Capita]] — a total says how much of an amount there is, and a rate says what that amount means for anyone inside the group. The 0.87% per-swipe match chance and the 80% of men rated below average are both rates.
- [[wiki/Concepts/Social Media - Curvilinear Design & the Theft of Time|Social Media - Curvilinear Design & the Theft of Time]] — a feed with no end, so continuing never has to be chosen. The swipe queue is a feed with no end, and the class action says the apps keep people swiping for a match made rare on purpose.
- [[wiki/Worldviews & the Political Order/Schooling - The Format Filter|Schooling - The Format Filter]] — a school day spent sitting still suited girls and failed boys, so each sex grew up with a wrong picture of the other. The swipe hands adults a second wrong picture of the other sex.
- [[wiki/Worldviews & the Political Order/The Woke Mind Virus|The Woke Mind Virus]] — the measured mental health of young men by politics. The 63% of men under 30 who are single, and the young men leaving the apps, belong beside those figures.
- [[wiki/Worldviews & the Political Order/Women's Suffrage - The Substitute Husband|Women's Suffrage - The Substitute Husband]] — why a woman without a husband has reason to vote for a bigger state, one that provides and protects the way a husband once did. The 63% of men under 30 who are single is an unpartnered bloc of the same kind, made of men.

## Open questions

- Would a Gini computed on messages sent, rather than on likes, land near the women's 0.376, as the 2009 messaging pattern suggests?
- How much of the 0.542 comes from the swipe design and how much from what women prefer? The video gives no way to separate the two.
- Hinge is the only big Match Group app with rising paying users in 2025, and its stated aim is to be deleted once it has worked. Is Hinge's Gini lower than Tinder's? The video does not say.
- Do run clubs show the same piling-up of attention on a few men when someone measures it, or does the video assume it?
- Does the men leaving lower the measured Gini only because the men who remain are the ones who still receive likes, with no change in anyone's chances?

## Sources

- Front Page, *The Hypocrisy Of Men VS Women On Dating Apps* (YouTube, published 2026-08-13, 63 minutes). <https://www.youtube.com/watch?v=6T0lc_BnExI>. Read from YouTube's auto-generated captions. Personal names in the captions are spelled inconsistently and are not relied on. Two sponsor segments, a law firm and a budgeting app, are excluded. The video lists its own sources in its description, which were not read for this page.
- Where the video says its figures come from:
  - a 2017 Medium post by a Hinge engineer, for the Gini figures and the 15% and 1% shares
  - a 2009 OkCupid blog analysis of attractiveness ratings against messages sent
  - a 2024 swipe dataset from an analytics firm, 294 million swipes across 7,000 accounts
  - Match Group earnings reports and transparency reports, 2023 to 2025
  - a Pew survey run in 2022 and published in February 2023 on single young adults
  - leaked 2023 Bumble height-filter data
- The video also covers anonymous apps and Facebook groups where women review named men, the July 2025 data breach at one of those apps, the US court rulings that protected the women who posted, and the accounts Match Group bans each year, with no published rate of wrongful bans.
