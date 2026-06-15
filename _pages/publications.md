---
permalink: /publications/
title: "Publications, Patents & Talks"
excerpt: ""
author_profile: true
redirect_from:
  - /talks/
---

# Publications

I actively share my research across peer-reviewed journal and conference papers, patents, abstracts, workshops, and demos. I contribute as first author, collaborator, and PI across several research domains mostly linked to EEG/EMG.

{% assign pubs = site.data.publications %}
{% assign n_patent = pubs | where: "type", "patent" | size %}
{% assign n_journal = pubs | where: "type", "journal" | size %}
{% assign n_conference = pubs | where: "type", "conference" | size %}
{% assign n_thesis = pubs | where: "type", "thesis" | size %}
{% assign n_abstract = pubs | where: "type", "abstract" | size %}
{% assign n_workshop = pubs | where: "type", "workshop" | size %}
{% assign n_demo = pubs | where: "type", "demo" | size %}
{% assign n_all = pubs | size %}
{% assign n_first_author = 0 %}
{% assign n_second_author = 0 %}
{% assign n_last_author = 0 %}
{% assign n_tag_eeg = 0 %}
{% assign n_tag_emg = 0 %}
{% assign n_tag_motoneuron = 0 %}
{% assign n_tag_motor_unit = 0 %}
{% assign n_tag_preprocessing = 0 %}
{% assign n_tag_neuromuscular_modelling = 0 %}
{% assign n_tag_msk_modelling = 0 %}
{% assign n_tag_motor_control = 0 %}
{% assign n_tag_neural_decoding_bci = 0 %}
{% assign n_tag_benchmarking_evaluation = 0 %}
{% for pub in pubs %}
{% assign author_parts = pub.authors | split: "," %}
{% assign first_author = author_parts[0] | strip %}
{% assign second_author = author_parts[1] | strip %}
{% assign last_author = author_parts | last | strip %}
{% if first_author contains "Caillet" %}
{% assign n_first_author = n_first_author | plus: 1 %}
{% endif %}
{% if second_author contains "Caillet" %}
{% assign n_second_author = n_second_author | plus: 1 %}
{% endif %}
{% if last_author contains "Caillet" %}
{% assign n_last_author = n_last_author | plus: 1 %}
{% endif %}
{% if pub.tags contains "eeg" %}
{% assign n_tag_eeg = n_tag_eeg | plus: 1 %}
{% endif %}
{% if pub.tags contains "emg" %}
{% assign n_tag_emg = n_tag_emg | plus: 1 %}
{% endif %}
{% if pub.tags contains "motoneuron" %}
{% assign n_tag_motoneuron = n_tag_motoneuron | plus: 1 %}
{% endif %}
{% if pub.tags contains "motor-unit" %}
{% assign n_tag_motor_unit = n_tag_motor_unit | plus: 1 %}
{% endif %}
{% if pub.tags contains "preprocessing" %}
{% assign n_tag_preprocessing = n_tag_preprocessing | plus: 1 %}
{% endif %}
{% if pub.tags contains "neuromuscular-modelling" %}
{% assign n_tag_neuromuscular_modelling = n_tag_neuromuscular_modelling | plus: 1 %}
{% endif %}
{% if pub.tags contains "msk-modelling" %}
{% assign n_tag_msk_modelling = n_tag_msk_modelling | plus: 1 %}
{% endif %}
{% if pub.tags contains "motor-control" %}
{% assign n_tag_motor_control = n_tag_motor_control | plus: 1 %}
{% endif %}
{% if pub.tags contains "neural-decoding-bci" %}
{% assign n_tag_neural_decoding_bci = n_tag_neural_decoding_bci | plus: 1 %}
{% endif %}
{% if pub.tags contains "benchmarking-evaluation" %}
{% assign n_tag_benchmarking_evaluation = n_tag_benchmarking_evaluation | plus: 1 %}
{% endif %}
{% endfor %}
{% assign year_groups = pubs | group_by: "year" | sort: "name" | reverse %}
{% assign chart_groups = pubs | group_by: "year" | sort: "name" %}

<div class="pubtrack" data-pubtrack>
  <div class="pubtrack__showcase">
    <div class="pubtrack__chart-wrap">
      <div class="pubtrack__chart" role="img" aria-label="One square per public output, stacked by year from 2021 to 2026 and colored by type.">
        {% for y in (2021..2026) %}
          {% assign ystr = y | append: "" %}
          {% assign g = chart_groups | where: "name", ystr | first %}
          {% if g %}
            <a class="pubtrack__col" href="#pubyear-{{ y }}" target="_self" data-chart-year="{{ y }}" aria-label="{{ y }}: {{ g.items | size }} public outputs">
              <span class="pubtrack__stack">{% for pub in g.items %}<i class="pubtrack__cell pubtrack__cell--{{ pub.type }}" data-cell-type="{{ pub.type }}" title="{{ pub.title | escape }}"></i>{% endfor %}</span>
              <span class="pubtrack__col-year">&rsquo;{{ ystr | slice: 2, 2 }}</span>
            </a>
          {% else %}
            <span class="pubtrack__col pubtrack__col--empty" aria-hidden="true">
              <span class="pubtrack__stack"><i class="pubtrack__tick"></i></span>
              <span class="pubtrack__col-year">&rsquo;{{ ystr | slice: 2, 2 }}</span>
            </span>
          {% endif %}
        {% endfor %}
      </div>
    </div>
    <div class="pubtrack__venues" aria-label="Journal and conference venues">
      <span class="pubtrack__venue-logo pubtrack__venue-logo--spotlight pubtrack__venue-logo--slot-a"><img src="{{ '/assets/images/venues/neurips-cropped.jpeg' | relative_url }}" alt="NeurIPS"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--spotlight pubtrack__venue-logo--slot-b"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.35.39.png' | relative_url }}" alt="IEEE Signal Processing Society"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--featured pubtrack__venue-logo--slot-c"><img src="{{ '/assets/images/venues/elife-cropped.png' | relative_url }}" alt="eLife"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--featured pubtrack__venue-logo--slot-d"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.37.30.png' | relative_url }}" alt="EMB"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--wide pubtrack__venue-logo--slot-e"><img src="{{ '/assets/images/venues/APS-Journal-of-Applied-Physiology.png' | relative_url }}" alt="Journal of Applied Physiology"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--wide pubtrack__venue-logo--slot-f"><img src="{{ '/assets/images/venues/JSC-logo.png' | relative_url }}" alt="Journal of Strength and Conditioning Research"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--plos pubtrack__venue-logo--slot-g"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.28.55.png' | relative_url }}" alt="PLOS Computational Biology"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--wide pubtrack__venue-logo--slot-h"><img src="{{ '/assets/images/venues/ESB_logo_on_white-1024x276.png' | relative_url }}" alt="European Society of Biomechanics"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--square pubtrack__venue-logo--slot-i"><img src="{{ '/assets/images/venues/logo-isb-oversize.png' | relative_url }}" alt="International Society of Biomechanics"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--square pubtrack__venue-logo--slot-j"><img src="{{ '/assets/images/venues/WCB-2026-Logo-Package_Coloured-Stacked-Primary-Logo-with-Website-05.png' | relative_url }}" alt="World Congress of Biomechanics"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--wide pubtrack__venue-logo--slot-k"><img src="{{ '/assets/images/venues/hn_logo_round.webp' | relative_url }}" alt="HybridNeuro"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--quiet pubtrack__venue-logo--slot-l"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.32.12.png' | relative_url }}" alt="eNeuro"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--quiet pubtrack__venue-logo--slot-m"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.29.44.png' | relative_url }}" alt="IEEE"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--square pubtrack__venue-logo--slot-n"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.39.06.png' | relative_url }}" alt="ISEK"></span>
      <span class="pubtrack__venue-logo pubtrack__venue-logo--ncm pubtrack__venue-logo--slot-o"><img src="{{ '/assets/images/venues/Screenshot 2026-06-12 at 17.42.06.png' | relative_url }}" alt="NCM"></span>
    </div>
  </div>

  <div class="pubtrack__filters" role="group" aria-label="Filter public outputs by type">
    <button type="button" class="pubtrack__filter is-active" data-filter="all" aria-pressed="true">All <span class="pubtrack__count">{{ n_all }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--patent" data-filter="patent" aria-pressed="false">Patent <span class="pubtrack__count">{{ n_patent }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--journal" data-filter="journal" aria-pressed="false">Journal <span class="pubtrack__count">{{ n_journal }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--conference" data-filter="conference" aria-pressed="false">Conference <span class="pubtrack__count">{{ n_conference }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--thesis" data-filter="thesis" aria-pressed="false">PhD thesis <span class="pubtrack__count">{{ n_thesis }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--abstract" data-filter="abstract" aria-pressed="false">Abstract <span class="pubtrack__count">{{ n_abstract }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--workshop" data-filter="workshop" aria-pressed="false">Workshop <span class="pubtrack__count">{{ n_workshop }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--demo" data-filter="demo" aria-pressed="false">Demo <span class="pubtrack__count">{{ n_demo }}</span></button>
  </div>
  <div class="pubtrack__filters pubtrack__filters--author" role="group" aria-label="Filter public outputs by author position">
    <button type="button" class="pubtrack__filter pubtrack__filter--role is-active" data-author-filter="all" aria-pressed="true">Any role</button>
    <button type="button" class="pubtrack__filter pubtrack__filter--role" data-author-filter="first" aria-pressed="false">First author <span class="pubtrack__count">{{ n_first_author }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--role" data-author-filter="second" aria-pressed="false">Second author <span class="pubtrack__count">{{ n_second_author }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--role" data-author-filter="last" aria-pressed="false">Last author <span class="pubtrack__count">{{ n_last_author }}</span></button>
  </div>
  <div class="pubtrack__filters pubtrack__filters--tags" role="group" aria-label="Filter public outputs by scientific tag">
    <button type="button" class="pubtrack__filter pubtrack__filter--tag is-active" data-tag-filter="all" aria-pressed="true">All topics</button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="eeg" aria-pressed="false">EEG <span class="pubtrack__count">{{ n_tag_eeg }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="emg" aria-pressed="false">EMG <span class="pubtrack__count">{{ n_tag_emg }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="motoneuron" aria-pressed="false">Motoneuron <span class="pubtrack__count">{{ n_tag_motoneuron }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="motor-unit" aria-pressed="false">Motor unit <span class="pubtrack__count">{{ n_tag_motor_unit }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="preprocessing" aria-pressed="false">Preprocessing <span class="pubtrack__count">{{ n_tag_preprocessing }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="neuromuscular-modelling" aria-pressed="false">Neuromuscular modelling <span class="pubtrack__count">{{ n_tag_neuromuscular_modelling }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="msk-modelling" aria-pressed="false">MSK modelling <span class="pubtrack__count">{{ n_tag_msk_modelling }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="motor-control" aria-pressed="false">Motor control <span class="pubtrack__count">{{ n_tag_motor_control }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="neural-decoding-bci" aria-pressed="false">Neural decoding & BCI <span class="pubtrack__count">{{ n_tag_neural_decoding_bci }}</span></button>
    <button type="button" class="pubtrack__filter pubtrack__filter--tag" data-tag-filter="benchmarking-evaluation" aria-pressed="false">Benchmarking & evaluation <span class="pubtrack__count">{{ n_tag_benchmarking_evaluation }}</span></button>
  </div>

  <div class="pubtrack__years">
    {% for group in year_groups %}
      <div class="pubtrack__year anchor" id="pubyear-{{ group.name }}" data-year-group>
        <p class="pubtrack__year-label">{{ group.name }}</p>
        <div class="pubtrack__rows">
          {% for pub in group.items %}
            {% assign author_parts = pub.authors | split: "," %}
            {% assign first_author = author_parts[0] | strip %}
            {% assign second_author = author_parts[1] | strip %}
            {% assign last_author = author_parts | last | strip %}
            {% assign author_roles = "" %}
            {% if first_author contains "Caillet" %}
              {% assign author_roles = author_roles | append: " first" %}
            {% endif %}
            {% if second_author contains "Caillet" %}
              {% assign author_roles = author_roles | append: " second" %}
            {% endif %}
            {% if last_author contains "Caillet" %}
              {% assign author_roles = author_roles | append: " last" %}
            {% endif %}
            {% assign authors = pub.authors | replace: "Caillet A.H.", "<strong>Caillet A.H.</strong>" | replace: "Caillet,", "<strong>Caillet</strong>," | replace: " Caillet.", " <strong>Caillet</strong>." %}
            {% if pub.links.pdf %}
              {% assign title_href = pub.links.pdf | relative_url %}
            {% elsif pub.links.arxiv %}
              {% assign title_href = pub.links.arxiv %}
            {% elsif pub.links.doi %}
              {% assign title_href = pub.links.doi %}
            {% elsif pub.links.site %}
              {% assign title_href = pub.links.site %}
            {% else %}
              {% assign title_href = "" %}
            {% endif %}
            {% if pub.figure %}
              {% capture pubfig %}<span class="pubfig" aria-hidden="true"><img src="{{ pub.figure | relative_url }}" alt="" loading="lazy"></span>{% endcapture %}
            {% else %}
              {% assign pubfig = "" %}
            {% endif %}
            <article class="pubtrack__entry pubtrack__entry--{{ pub.type }} anchor" id="{{ pub.id }}" data-type="{{ pub.type }}" data-tags="{{ pub.tags | join: ' ' }}" data-author-roles="{{ author_roles | strip }}">
              {% if title_href != "" %}
                <p class="pubtrack__title"><a href="{{ title_href }}">{{ pub.title }}{{ pubfig }}</a></p>
              {% else %}
                <p class="pubtrack__title">{{ pub.title }}{{ pubfig }}</p>
              {% endif %}
              <p class="pubtrack__meta"><span class="pubtrack__type pubtrack__type--{{ pub.type }}">{{ pub.type_label | default: pub.type }}</span><span class="pubtrack__venue">{{ pub.venue }}</span>{% if pub.status %}<span class="pubtrack__status">{{ pub.status | replace: "-", " " }}</span>{% endif %}</p>
              <p class="pubtrack__authors">{{ authors }}</p>
              {% if pub.links %}
                <p class="pubtrack__links">{% if pub.links.pdf %}<a href="{{ pub.links.pdf | relative_url }}">PDF<span class="pubtrack__glyph">&nbsp;&darr;</span></a>{% endif %}{% if pub.links.arxiv %}<a href="{{ pub.links.arxiv }}">arXiv<span class="pubtrack__glyph">&nbsp;&nearr;</span></a>{% endif %}{% if pub.links.doi %}<a href="{{ pub.links.doi }}">DOI<span class="pubtrack__glyph">&nbsp;&nearr;</span></a>{% endif %}{% if pub.links.site %}<a href="{{ pub.links.site }}">Site<span class="pubtrack__glyph">&nbsp;&nearr;</span></a>{% endif %}</p>
              {% endif %}
              {% if pub.tags %}
                <p class="pubtrack__tags">
                  {% for tag in pub.tags %}
                    {% case tag %}
                      {% when "eeg" %}{% assign tag_label = "EEG" %}
                      {% when "emg" %}{% assign tag_label = "EMG" %}
                      {% when "motoneuron" %}{% assign tag_label = "Motoneuron" %}
                      {% when "motor-unit" %}{% assign tag_label = "Motor unit" %}
                      {% when "preprocessing" %}{% assign tag_label = "Preprocessing" %}
                      {% when "neuromuscular-modelling" %}{% assign tag_label = "Neuromuscular modelling" %}
                      {% when "msk-modelling" %}{% assign tag_label = "MSK modelling" %}
                      {% when "motor-control" %}{% assign tag_label = "Motor control" %}
                      {% when "neural-decoding-bci" %}{% assign tag_label = "Neural decoding & BCI" %}
                      {% when "benchmarking-evaluation" %}{% assign tag_label = "Benchmarking & evaluation" %}
                      {% else %}{% assign tag_label = tag %}
                    {% endcase %}
                    <span class="pubtrack__tag pubtrack__tag--{{ tag }}">{{ tag_label }}</span>
                  {% endfor %}
                </p>
              {% endif %}
            </article>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
