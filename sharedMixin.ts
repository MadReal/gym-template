import { gymInfo } from "~/gymInfo";

export const formattedPhone = computed(() => {
	return gymInfo.phone.replace(/\s/g, "");
});
