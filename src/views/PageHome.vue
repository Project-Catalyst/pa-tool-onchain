<template>
  <div class="section container">
    <article class="message">
      <div class="message-body">
        <p class="mb-1">
          This is a community made tool to assist with the facilitation of the
          Proposal Assessor (PA) assessment process. It allows PAs to be assigned
          a proposal and to keep track of the overall proposals already assessed.
        </p>
        <p><b>How it works</b></p>
        <p>
          <b>By clicking the "Suggest Proposal" button</b> the system will suggest a
          proposal with a low number of assessments. If it interests you you can
          assess it, or you can click the button again and it'll provide you with
          another low assessed proposal. You can also adjust which challenges you
          will see by adjusting the filter that you select.
        </p>
      </div>
    </article>

    <article class="message is-info">
      <div class="message-body">
        <p><b>Useful links for Proposal Assessors</b></p>
        <p>
          Read the
          <a
            href="https://docs.google.com/document/d/1g-iZhDlKhUBZkui1uv8NVNfJC4oVD3JtR-P6Fue7XPU/edit"
            target="_blank"
          >Proposal Assessor Guide</a><br>
          Watch the
          <a
            href="https://www.youtube.com/playlist?list=PLDLKmC_jWczVff7Gv6J5nmKLl52mVCT9q"
            target="_blank"
          >the Catalyst School workshops for Proposal Assessors</a><br>
          Join the
          <a
            href="https://t.me/CatalystCommunityAdvisors"
            target="_blank"
          >Proposal Assessor TG support channel</a>
        </p>
      </div>
    </article>
  </div>

  <div class="is-flex is-justify-content-center">
    <ActionButton />
  </div>
</template>

<script setup>
import ActionButton from "@/components/ActionButton.vue";
</script>
