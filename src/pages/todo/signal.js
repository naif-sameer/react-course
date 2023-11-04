import { signal, computed } from "@preact/signals-react";

export const counterSignal = signal(0);
export const firstName = signal("");
export const lastName = signal("");
export const date = signal("");

export const fullName = computed(() => `${firstName.value} ${lastName.value}`);
