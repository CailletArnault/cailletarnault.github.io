---
permalink: /open-source/
title: "Open Source"
excerpt: ""
author_profile: true
---

# Open Source

<div class="opensource">
  <p class="opensource__intro">I am an advocate for <strong>open science</strong>. During my academic journey, I <strong>contributed datasets and code</strong> around motoneuron electrophysiology, cross-session/task high-density surface EMG, motor unit physiology and activity, and neuromuscular modelling.</p>
  <p class="opensource__intro">I now <strong>push open-science initiatives</strong> through my dual role as CSO of Yneuro and Honorary Research Officer at Imperial College London: developing and maintaining code libraries, organizing open competitions, and building bridges between academia and industry.</p>
   <p class="opensource__intro">I strongly believe that science progresses when academia and industry work hand in hand around shared tools, open benchmarks, and reusable resources on a large scale.</p>

  <nav class="opensource__verticals" aria-label="Open-source verticals">
    <a href="#open-challenges"><strong>Open challenges</strong><span>Community competitions</span></a>
    <a href="#open-infrastructure"><strong>Infrastructure</strong><span>Shared libraries and platforms</span></a>
    <a href="#open-packages"><strong>Python packages</strong><span>Reusable research code</span></a>
    <a href="#open-data"><strong>Data release</strong><span>Open datasets</span></a>
  </nav>

  <section class="opensource__section anchor" id="open-challenges">
    <div class="opensource__section-head">
      <span class="opensource__section-index">01</span>
      <div>
        <h2>Open Challenges</h2>
        <p>I co-lead with <a href="https://bruaristimunha.github.io/">Bruno Aristimunha</a> the organization of the <a href="https://neural-interfaces26.github.io/">EEG/EMG Foundation Challenge 2026</a>. The competition connects academic labs, open-source infrastructure, and industry research teams around EEG/EMG foundation models and domain shifts across subjects, sessions, emotions, context, and hardware. <strong>Yneuro</strong> is the lead organizer in collaboration with <strong>Inria</strong>, <strong>UCSD</strong>, and <strong>Meta</strong>, backed by <strong>AWS</strong>, with four tracks:</p>
      </div>
    </div>

    <div class="opensource__challenge">
      <div class="opensource__challenge-main">
        <div class="opensource__challenge-left">
          <div class="opensource__tracks" aria-label="Competition tracks">
            <a href="https://neural-interfaces26.github.io/leaderboard.html#track-1"><strong>Track 1 - EEG-to-Image</strong><small>Meta FAIR Brain &amp; AI + Alljoined</small></a>
            <a href="https://neural-interfaces26.github.io/leaderboard.html#track-2"><strong>Track 2 - BCI Decoding</strong><small>Inria LaBRI</small></a>
            <a href="https://neural-interfaces26.github.io/leaderboard.html#track-3"><strong>Track 3 - EEG to Sleep Onset</strong><small>InteraXon Inc.</small></a>
            <a href="https://neural-interfaces26.github.io/leaderboard.html#track-4"><strong>Track 4 - EMG-to-Text</strong><small>Meta Reality Labs + Imperial</small></a>
          </div>

          <div class="opensource__stakeholders" aria-label="Competition stakeholders">
            <img class="opensource__logo opensource__logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__logo opensource__logo--ucsd" src="{{ '/assets/images/opensource/logos/ucsd.svg' | relative_url }}" alt="UC San Diego">
            <img class="opensource__logo opensource__logo--inria" src="{{ '/assets/images/opensource/logos/inria.png' | relative_url }}" alt="Inria">
            <img class="opensource__logo opensource__logo--alljoined" src="{{ '/assets/images/opensource/logos/alljoined.png' | relative_url }}" alt="Alljoined">
            <img class="opensource__logo opensource__logo--meta-brain" src="{{ '/assets/images/opensource/logos/meta-brainai.png' | relative_url }}" alt="Meta Brain & AI">
            <img class="opensource__logo opensource__logo--interaxon" src="{{ '/assets/images/opensource/logos/interaxon.jpg' | relative_url }}" alt="InteraXon">
            <img class="opensource__logo opensource__logo--meta-reality" src="{{ '/assets/images/opensource/logos/meta-reality.png' | relative_url }}" alt="Meta Reality Labs">
            <img class="opensource__logo opensource__logo--aws" src="{{ '/assets/images/opensource/logos/aws.svg' | relative_url }}" alt="AWS">
            <img class="opensource__logo opensource__logo--imperial" src="{{ '/assets/images/opensource/logos/imperial.png' | relative_url }}" alt="Imperial College London">
            <img class="opensource__logo opensource__logo--donders" src="{{ '/assets/images/opensource/logos/donders.png' | relative_url }}" alt="Donders Institute">
            <img class="opensource__logo opensource__logo--isae" src="{{ '/assets/images/opensource/logos/isae-supaero.svg' | relative_url }}" alt="ISAE-SUPAERO">
            <img class="opensource__logo opensource__logo--paris-saclay" src="{{ '/assets/images/opensource/logos/paris-saclay.png' | relative_url }}" alt="Paris-Saclay University">
            <img class="opensource__logo opensource__logo--bordeaux" src="{{ '/assets/images/opensource/logos/bordeaux.png' | relative_url }}" alt="Universite de Bordeaux">
            <img class="opensource__logo opensource__logo--icm" src="{{ '/assets/images/opensource/logos/icm.png' | relative_url }}" alt="Institut du Cerveau">
            <img class="opensource__logo opensource__logo--cnrs" src="{{ '/assets/images/opensource/logos/cnrs.png' | relative_url }}" alt="CNRS">
            <img class="opensource__logo opensource__logo--salk" src="{{ '/assets/images/opensource/logos/salk.png' | relative_url }}" alt="Salk Institute">
            <img class="opensource__logo opensource__logo--chalearn" src="{{ '/assets/images/opensource/logos/chalearn.png' | relative_url }}" alt="ChaLearn">
          </div>
        </div>

        <a class="opensource__visual" href="https://neural-interfaces26.github.io/">
          <img src="{{ '/assets/images/opensource/generated/neural-interface-competition-overview.png' | relative_url }}" alt="Neural Interface 2026 competition tracks overview">
        </a>
      </div>
    </div>

  </section>

  <section class="opensource__section anchor" id="open-infrastructure">
    <div class="opensource__section-head">
      <span class="opensource__section-index">02</span>
      <div>
        <h2>Infrastructure</h2>
        <p>Supporting open-source libraries and benchmark platforms that make shared scientific progress easier to reproduce, maintain, and scale.</p>
      </div>
    </div>

    <div class="opensource__items">
      <a class="opensource__item opensource__item--preview" href="https://braindecode.org/stable/index.html">
        <h3>Braindecode</h3>
        <p>Building the Yneuro x Inria Paris-Saclay collaboration to contribute to, sponsor, and maintain Braindecode.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Library maintenance</span><span>Sponsorship</span><span>Neural decoding</span></span>
          <span class="opensource__mini-logos" aria-label="Braindecode stakeholders">
            <img class="opensource__mini-logo--braindecode" src="{{ '/assets/images/opensource/logos/braindecode.svg' | relative_url }}" alt="Braindecode">
            <img class="opensource__mini-logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro-mini.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__mini-logo--inria" src="{{ '/assets/images/opensource/logos/inria.png' | relative_url }}" alt="Inria">
            <img class="opensource__mini-logo--lisn" src="{{ '/assets/images/opensource/logos/lisn.png' | relative_url }}" alt="LISN">
          </span>
        </span>
        <span class="opensource__preview"><img src="{{ '/assets/images/opensource/generated/braindecode-home.png' | relative_url }}" alt="Braindecode website preview"></span>
      </a>

      <a class="opensource__item opensource__item--preview" href="https://www.codabench.org/">
        <h3>Codabench</h3>
        <p>Commissioning AWS and Deloitte to support the Codabench team at Paris-Saclay to scale the competition platform.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Library scaling</span><span>Benchmark</span><span>Competition</span></span>
          <span class="opensource__mini-logos" aria-label="Codabench stakeholders">
            <img class="opensource__mini-logo--codabench" src="{{ '/assets/images/opensource/logos/codabench.png' | relative_url }}" alt="Codabench">
            <img class="opensource__mini-logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro-mini.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__mini-logo--paris-saclay" src="{{ '/assets/images/opensource/logos/paris-saclay.png' | relative_url }}" alt="Paris-Saclay University">
            <img class="opensource__mini-logo--aws" src="{{ '/assets/images/opensource/logos/aws.svg' | relative_url }}" alt="AWS">
            <img class="opensource__mini-logo--deloitte" src="{{ '/assets/images/opensource/logos/deloitte.jpg' | relative_url }}" alt="Deloitte">
          </span>
        </span>
        <span class="opensource__preview"><img src="{{ '/assets/images/opensource/generated/codabench-home.png' | relative_url }}" alt="Codabench website preview"></span>
      </a>

      <a class="opensource__item" href="https://mne.tools/stable/index.html">
        <h3>MNE-EMG</h3>
        <p>Initiating, with Pranav Mamidanna, a central Python package for EMG signal processing and analysis within the MNE-Python ecosystem.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Package development</span><span>EMG</span><span>MNE ecosystem</span></span>
          <span class="opensource__mini-logos" aria-label="MNE-EMG stakeholders">
            <img class="opensource__mini-logo--mne" src="{{ '/assets/images/opensource/logos/mne.svg' | relative_url }}" alt="MNE-Python">
            <img class="opensource__mini-logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro-mini.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__mini-logo--imperial" src="{{ '/assets/images/opensource/logos/imperial.png' | relative_url }}" alt="Imperial College London">
          </span>
        </span>
      </a>
    </div>

  </section>

  <section class="opensource__section anchor" id="open-packages">
    <div class="opensource__section-head">
      <span class="opensource__section-index">03</span>
      <div>
        <h2>Python Packages</h2>
        <p>Releasing reusable code around EMG, motoneurons, motor units, simulation, and neuromuscular modelling.</p>
      </div>
    </div>

    <div class="opensource__items opensource__items--compact">
      <a class="opensource__item" href="https://github.com/dfarinagroup/muniverse">
        <h3>MUniverse</h3>
        <p>Simulation and benchmarking suite for motor unit decomposition, spanning synthetic, hybrid, and experimental EMG with ground-truth motor unit spikes.</p>
        <span class="opensource__tags"><span>Benchmark</span><span>Motor unit</span><span>HD-EMG</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/ArnaultCAILLET/MN-driven-Neuromuscular-Model-with-motor-unit-resolution">
        <h3>Motoneuron-Driven Neuromuscular Model</h3>
        <p>Subject-specific neuromuscular modelling with motor unit resolution.</p>
        <span class="opensource__tags"><span>Neuromuscular model</span><span>Musculoskeletal model</span><span>HD-EMG</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/shihan-ma/NeuroMotion">
        <h3>NeuroMotion Simulator</h3>
        <p>Dynamic, motion-driven EMG signal generation with neuromechanical and deep learning models.</p>
        <span class="opensource__tags"><span>VAE</span><span>EMG</span><span>Motion</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/ArnaultCAILLET/Caillet-et-al-2022-PLOS_Comput_Biol">
        <h3>Data Augmentation for Motoneuron Pool Reconstruction</h3>
        <p>EMG-based motoneuron pool reconstruction with data augmentation.</p>
        <span class="opensource__tags"><span>Motoneuron pool</span><span>Data augmentation</span><span>HD-EMG</span></span>
      </a>
    </div>

  </section>

  <section class="opensource__section anchor" id="open-data">
    <div class="opensource__section-head">
      <span class="opensource__section-index">04</span>
      <div>
        <h2>Data Release</h2>
        <p>Making datasets reusable for motor unit physiology, high-density EMG, neuromuscular simulation, and cross-species motoneuron modelling.</p>
      </div>
    </div>

    <div class="opensource__items opensource__items--compact">
      <a class="opensource__item" href="https://figshare.com/articles/dataset/24640944/1">
        <h3>High-Density EMG Dataset, 16 participants</h3>
        <p>Signals and manually edited spike trains from two muscles, with 2000+ identified motor units.</p>
      </a>

      <a class="opensource__item" href="https://doi.org/10.6084/m9.figshare.22149287">
        <h3>High-Density EMG Dataset, 6 participants</h3>
        <p>Signals and manually edited spike trains from one muscle, with 500+ identified motor units.</p>
      </a>

      <a class="opensource__item" href="https://zenodo.org/records/10069266">
        <h3>Medical Imaging &amp; Musculoskeletal Model Dataset</h3>
        <p>Segmented anatomical volumes and subject-specific musculoskeletal models for neuromuscular simulations.</p>
      </a>

      <a class="opensource__item" href="https://elifesciences.org/articles/76489/figures#content">
        <h3>Cat &amp; Rat Motoneuron Electrophysiology Dataset</h3>
        <p>Experimental motoneuron electrophysiology data for cross-species modelling.</p>
      </a>
    </div>

  </section>
</div>
