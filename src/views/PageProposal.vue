<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="section container">
    <h1
      v-if="proposal"
      class="title"
    >
      {{ proposal.title }}
    </h1>
    <h2
      v-if="challenge"
      class="subtitle"
    >
      {{ challenge.title }}
    </h2>

    <progress
      v-if="isPageLoading"
      class="progress is-small is-primary"
      max="100"
    />

    <template v-else>
      <nav
        class="breadcrumb"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <RouterLink :to="{name: 'Proposals'}">
              Proposals
            </RouterLink>
          </li>
          <li class="is-active">
            <a
              href="#"
              aria-current="page"
            >
              {{ proposal.title }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="block box">
        <h6 class="title is-6">
          <span class="has-text-weight-normal">Author:</span> {{ proposal.author }}
        </h6>

        <div class="mb-4">
          <h4 class="title is-5 mb-1">
            {{ isChallengeSetting ? 'Challenge question' : 'Problem statement' }} (max 140 char)
          </h4>
          <div v-html="proposal.description" />
        </div>

        <div
          v-if="proposal.problem_solution"
          class="mb-4"
        >
          <h4 class="title is-5 mb-1">
            Problem solution (max 140 char)
          </h4>
          <div v-html="proposal.problem_solution" />
        </div>

        <div
          v-if="proposal.relevant_experience"
          class="mb-4"
        >
          <h4 class="title is-5 mb-1">
            Relevant experience (max 140 char)
          </h4>
          <div v-html="proposal.relevant_experience" />
        </div>

        <div
          v-if="proposal.importance"
          class="mb-4"
        >
          <h4 class="title is-5 mb-1">
            Why is it important? (max 140 char)
          </h4>
          <div v-html="proposal.importance" />
        </div>

        <div
          v-if="proposal.how_does_success_look_like_"
          class="mb-4"
        >
          <h4 class="title is-5 mb-1">
            How does success look like? (max 140 char)
          </h4>
          <div v-html="proposal.how_does_success_look_like_" />
        </div>

        <div
          v-if="proposal.requested_funds"
          class="mb-4"
        >
          Requested funds: <b>{{ proposal.requested_funds }}</b>
        </div>

        <div
          v-if="proposal.requested_funds_coti"
          class="mb-4"
        >
          Requested funds: <b>{{ proposal.requested_funds_coti }}</b>
        </div>

        <div>
          <span>
            <span class="mr-1">
              No. assessments:
            </span>
            <b v-if="proposal.assessmentsCount">
              {{ proposal.assessmentsCount }}
            </b>
            <span v-else-if="proposalsStore.assessmentsCountRequest.request.isLoading">
              <i class="fas fa-spinner fa-pulse" />
              Loading...
            </span>
            <span v-else>
              0
            </span>
          </span>

          <br>

          <span class="is-size-7">
            <span class="mr-1">
              Stats last update:
            </span>
            <span v-if="proposalsStore.lastUpdate">
              {{ proposalsStore.lastUpdateDuration }}
              [{{ proposalsStore.lastUpdateVerbose }}]
            </span>
            <span v-else-if="proposalsStore.lastUpdateRequest.request.isLoading">
              <i class="fas fa-spinner fa-pulse" />
              Loading...
            </span>
            <span v-else>
              Unknown
            </span>
          </span>
        </div>
      </div>

      <div class="block box">
        <div class="buttons">
          <a
            class="button is-medium is-link mr-4"
            :href="proposal.url"
            target="_blank"
          >
            <span class="icon">
              <i class="fas fa-eye" />
            </span>
            <span>Go to proposal</span>
          </a>
          <button class="button is-medium is-primary">
            <span>Suggest another proposal</span>
          </button>
        </div>
      </div>

      <div class="block box">
        ASSESSMENT
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useProposalsStore } from "@/stores/proposalsStore";
import challenges from "@/assets/data/f9/categories.json";

const route = useRoute();
const proposalsStore = useProposalsStore();

const proposalId = parseInt(route.params.id);

const proposal = computed(() => {
  return proposalsStore.all.find(({ id }) => id === proposalId);
});

const challenge = computed(() => {
  if (!proposal.value) {
    return null;
  }
  const categories = challenges.filter((c) => c.id === proposal.value.category);
  if (categories.length) {
    return categories[0];
  }
  return null;
});

const isChallengeSetting = computed(() => {
  return challenge.value?.id === 26257;
});

const isPageLoading = computed(() => {
  return !proposal.value || !challenge.value;
});
</script>