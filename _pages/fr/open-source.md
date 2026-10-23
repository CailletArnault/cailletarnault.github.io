---
permalink: /fr/open-source/
title: "Science ouverte"
excerpt: ""
author_profile: true
lang: fr
translation_key: open-source
---

# Science ouverte

<div class="opensource">
  <p class="opensource__intro">Je défends une <strong>science ouverte</strong>, convaincu que les grandes avancées naissent du travail collectif et du partage des données et des outils. Je m’y engage concrètement en publiant des <strong>données neurophysiologiques</strong>, en créant, développant et maintenant des <strong>bibliothèques open source</strong>, et en organisant des événements internationaux comme le <a href="#open-challenges">EEG/EMG Foundation Challenge 2026</a>.</p>

  <nav class="opensource__verticals" aria-label="Axes de science ouverte">
    <a href="#open-challenges"><strong>EEG/EMG Foundation Challenge 2026</strong><span>Compétition internationale</span></a>
    <a href="#open-infrastructure"><strong>Bibliothèques open source</strong><span>Outils et plateformes partagés</span></a>
    <a href="#open-packages"><strong>Packages Python</strong><span>Code de recherche réutilisable</span></a>
    <a href="#open-data"><strong>Données ouvertes</strong><span>Jeux de données ouverts</span></a>
  </nav>

{% include foundation-challenge.html %}

  <section class="opensource__section anchor" id="open-infrastructure">
    <div class="opensource__section-head">
      <span class="opensource__section-index">02</span>
      <div>
        <h2>Bibliothèques open source</h2>
        <p>À travers mon rôle de CSO à Yneuro, je soutiens activement des librairies open source et des plateformes de benchmark qui rendent le travail scientifique plus reproductible, maintenable et partageable.</p>
      </div>
    </div>

    <div class="opensource__items">
      <a class="opensource__item opensource__item--preview" href="https://braindecode.org/stable/index.html">
        <h3>Braindecode</h3>
        <p>Construire une collaboration Yneuro x Inria Paris-Saclay pour contribuer au développement, au financement et à la maintenance de Braindecode.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Maintenance</span><span>Soutien</span><span>Décodage neural</span></span>
          <span class="opensource__mini-logos" aria-label="Partenaires Braindecode">
            <img class="opensource__mini-logo--braindecode" src="{{ '/assets/images/opensource/logos/braindecode.svg' | relative_url }}" alt="Braindecode">
            <img class="opensource__mini-logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro-mini.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__mini-logo--inria" src="{{ '/assets/images/opensource/logos/inria.png' | relative_url }}" alt="Inria">
            <img class="opensource__mini-logo--lisn" src="{{ '/assets/images/opensource/logos/lisn.png' | relative_url }}" alt="LISN">
          </span>
        </span>
        <span class="opensource__preview"><img src="{{ '/assets/images/opensource/generated/braindecode-home.png' | relative_url }}" alt="Aperçu du site Braindecode"></span>
      </a>

      <a class="opensource__item opensource__item--preview" href="https://www.codabench.org/">
        <h3>Codabench</h3>
        <p>Mobiliser AWS et Deloitte pour soutenir l’équipe Codabench à Paris-Saclay dans le développement de la plateforme.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Stress tests</span><span>Benchmark</span><span>Compétition</span></span>
          <span class="opensource__mini-logos" aria-label="Partenaires Codabench">
            <img class="opensource__mini-logo--codabench" src="{{ '/assets/images/opensource/logos/codabench.png' | relative_url }}" alt="Codabench">
            <img class="opensource__mini-logo--yneuro" src="{{ '/assets/images/opensource/logos/yneuro-mini.png' | relative_url }}" alt="Yneuro">
            <img class="opensource__mini-logo--paris-saclay" src="{{ '/assets/images/opensource/logos/paris-saclay.png' | relative_url }}" alt="Paris-Saclay University">
            <img class="opensource__mini-logo--aws" src="{{ '/assets/images/opensource/logos/aws.svg' | relative_url }}" alt="AWS">
            <img class="opensource__mini-logo--deloitte" src="{{ '/assets/images/opensource/logos/deloitte.jpg' | relative_url }}" alt="Deloitte">
          </span>
        </span>
        <span class="opensource__preview"><img src="{{ '/assets/images/opensource/generated/codabench-home.png' | relative_url }}" alt="Aperçu du site Codabench"></span>
      </a>

      <a class="opensource__item" href="https://mne.tools/stable/index.html">
        <h3>MNE-EMG</h3>
        <p>Initier, avec Pranav Mamidanna, un package Python central pour le traitement et l’analyse des signaux EMG dans l’écosystème MNE-Python.</p>
        <span class="opensource__item-footer">
          <span class="opensource__tags"><span>Package Python</span><span>EMG</span><span>Écosystème MNE</span></span>
          <span class="opensource__mini-logos" aria-label="Partenaires MNE-EMG">
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
        <h2>Packages Python</h2>
        <p>Publier du code réutilisable pour l’EMG, les motoneurones, les unités motrices, la simulation et la modélisation neuromusculaire.</p>
      </div>
    </div>

    <div class="opensource__items opensource__items--compact">
      <a class="opensource__item" href="https://github.com/dfarinagroup/muniverse">
        <h3>MUniverse</h3>
        <p>Suite de simulation et de benchmark pour la décomposition d’unités motrices, avec EMG synthétique, hybride et expérimental, et spike trains de référence.</p>
        <span class="opensource__tags"><span>Benchmark</span><span>Unité motrice</span><span>HD-EMG</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/ArnaultCAILLET/MN-driven-Neuromuscular-Model-with-motor-unit-resolution">
        <h3>Motoneuron-Driven Neuromuscular Model</h3>
        <p>Modélisation neuromusculaire sujet-spécifique avec résolution à l’échelle de l’unité motrice.</p>
        <span class="opensource__tags"><span>Modèle neuromusculaire</span><span>Modèle MSK</span><span>HD-EMG</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/shihan-ma/NeuroMotion">
        <h3>NeuroMotion Simulator</h3>
        <p>Génération dynamique de signaux EMG à partir du mouvement, avec modèles neuromécaniques et deep learning.</p>
        <span class="opensource__tags"><span>VAE</span><span>EMG</span><span>Mouvement</span></span>
      </a>

      <a class="opensource__item" href="https://github.com/ArnaultCAILLET/Caillet-et-al-2022-PLOS_Comput_Biol">
        <h3>Data Augmentation for Motoneuron Pool Reconstruction</h3>
        <p>Reconstruction de pools de motoneurones à partir de l’EMG, avec augmentation de données.</p>
        <span class="opensource__tags"><span>Pool de motoneurones</span><span>Augmentation de données</span><span>HD-EMG</span></span>
      </a>
    </div>

  </section>

  <section class="opensource__section anchor" id="open-data">
    <div class="opensource__section-head">
      <span class="opensource__section-index">04</span>
      <div>
        <h2>Données ouvertes</h2>
        <p>Rendre les données réutilisables pour la physiologie des unités motrices, l’EMG haute densité, la simulation neuromusculaire et la modélisation inter-espèces des motoneurones.</p>
      </div>
    </div>

    <div class="opensource__items opensource__items--compact">
      <a class="opensource__item" href="https://figshare.com/articles/dataset/24640944/1">
        <h3>High-Density EMG Dataset II</h3>
        <p>Signaux et spike trains corrigés manuellement pour 2 muscles, 16 participants, 8 niveaux de contraction et plus de 2000 unités motrices identifiées.</p>
      </a>

      <a class="opensource__item" href="https://doi.org/10.6084/m9.figshare.22149287">
        <h3>High-Density EMG Dataset I</h3>
        <p>Signaux et spike trains corrigés manuellement pour 1 muscle, 6 participants, 2 niveaux de contraction et plus de 500 unités motrices identifiées.</p>
      </a>

      <a class="opensource__item" href="https://zenodo.org/records/10069266">
        <h3>Medical Imaging &amp; MSK Model Dataset</h3>
        <p>Volumes anatomiques segmentés et modèles musculosquelettiques sujet-spécifiques pour simulations neuromusculaires.</p>
      </a>

      <a class="opensource__item" href="https://elifesciences.org/articles/76489/figures#content">
        <h3>Cat &amp; Rat Motoneuron Electrophysiology Dataset</h3>
        <p>Données expérimentales d’électrophysiologie de motoneurones pour la modélisation inter-espèces.</p>
      </a>
    </div>

  </section>
</div>
