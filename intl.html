---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Internacional
---
{% assign allloclist = site.data.locations |  where_exp: "loc", "loc.country != 'Estados Unidos'" | where_exp: "loc", "loc.state != 'Puerto Rico'" %}
{% assign filtered_country = allloclist | map: 'country' | uniq | sort %}

{% for _country in filtered_country %}
  {% assign loclist = allloclist | where: "country", _country | sort: 'name' %}
  {% assign filtered_states = loclist | where: "country", _country | map: 'state' | uniq | sort %}
  <h3>{{ _country }}</h3>
  {% for _state in filtered_states %}
    {% assign filtered_cities = loclist | where: "country", _country | where: "state", _state | map: 'city' | uniq | sort %}
    {% for _city in filtered_cities %}
  <table class="tblblock">
    <caption>{{ _city }}, {{ _state }}</caption>
    <tbody>
      {% assign filtered_locs = loclist | where: "city", _city %}
      {% for loc in filtered_locs %}
      <tr>
        <th>
            {{ loc.name }}
        </th>
        <td>
          <a href="http://maps.google.com/maps?q=loc:{{ loc.latitude }},{{ loc.longitude }}&navigate=yes">
            Android/Google Maps
          </a>
        </td>
        <td>
          <a href="http://maps.apple.com/?q={{ loc.latitude }},{{ loc.longitude }}&z=10&t=s">
            iPhone
          </a>
        </td>
        <td>
          <input type="text" value="{{ loc.latitude }},{{ loc.longitude }}" readonly><br>
          <button onclick="copyGPS(this.parentNode.firstChild.nextSibling);">Copiar</button>
        </td>
        <td>
          Share via
          <a class="cell_whatsapp" href="whatsapp://send?text={{ loc.name }}: {{ loc.latitude }},{{ loc.longitude }}" data-action="share/whatsapp/share">Whatsapp</a>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
    {% endfor %}
  {% endfor %}
{% endfor %}

<script src='/assets/js/utils.js'></script>
