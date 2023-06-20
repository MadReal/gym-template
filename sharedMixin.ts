import { gymInfo } from "~/plugins/gym-info";

export const formattedPhone = computed(() => {
	return gymInfo.phone.replace(/\s/g, "");
});
