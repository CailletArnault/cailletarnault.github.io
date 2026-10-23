---
permalink: /open-source/
title: "Open Source"
excerpt: ""
author_profile: true
lang: en
translation_key: open-source
---

# Open Source

<div class="opensource">
  <p class="opensource__intro">I am a strong advocate for <strong>open science</strong>. I believe breakthroughs come from giving the whole community the data and tools to build on one another's work. I act on this by releasing <strong>neurophysiological datasets</strong>, creating, developing, and maintaining <strong>open-source libraries</strong>, and organizing international events such as the <a href="#open-challenges">EEG/EMG Foundation Challenge 2026</a>.</p>

  <nav class="opensource__verticals" aria-label="Open-source verticals">
    <a href="#open-challenges"><strong>EEG/EMG Foundation Challenge 2026</strong><span>International competition</span></a>
    <a href="#open-infrastructure"><strong>Open-source libraries</strong><span>Shared tools and platforms</span></a>
    <a href="#open-packages"><strong>Python packages</strong><span>Reusable research code</span></a>
    <a href="#open-data"><strong>Data release</strong><span>Open datasets</span></a>
  </nav>

{% include foundation-challenge.html %}

  <section class="opensource__section anchor" id="open-infrastructure">
    <div class="opensource__section-head">
      <span class="opensource__section-index">02</span>
      <div>
        <h2>Open-source libraries</h2>
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
        <h3>High-Density EMG Dataset II</h3>
        <p>Signals and manually edited spike trains from 2 muscles, 16 participants, 8 contractions levels, 1 session, with 2000+ identified motor units.</p>
      </a>

      <a class="opensource__item" href="https://doi.org/10.6084/m9.figshare.22149287">
        <h3>High-Density EMG Dataset I</h3>
        <p>Signals and manually edited spike trains from 1 muscle, 6 participants, 2 contraction levels, 1 session, with 500+ identified motor units.</p>
      </a>

      <a class="opensource__item" href="https://zenodo.org/records/10069266">
        <h3>Medical Imaging &amp; MSK Model Dataset</h3>
        <p>Segmented anatomical volumes and subject-specific musculoskeletal models for neuromuscular simulations.</p>
      </a>

      <a class="opensource__item" href="https://elifesciences.org/articles/76489/figures#content">
        <h3>Cat &amp; Rat Motoneuron Electrophysiology Dataset</h3>
        <p>Experimental motoneuron electrophysiology data for cross-species modelling.</p>
      </a>
    </div>

  </section>
</div>
