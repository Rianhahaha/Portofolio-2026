import { ProjectType } from "@/types";
import { getPayload } from "payload";
import configPromise from "@payload-config";

type PayloadProjcetTypes = {
    projectTypeId?: string;
    title?: string;
};

export const normalizePayloadProjectType = (
    projcetTypes: PayloadProjcetTypes,
): ProjectType => ({
    id: projcetTypes.projectTypeId,
    name: projcetTypes.title
})

export const getPayloadProjectTypes = async () => {
    const payload = await getPayload({
        config: configPromise
    })
    const projectTypes = await payload.find({
        collection: 'project-type',
        depth: 1
    })

    return projectTypes.docs.map((projectType) => normalizePayloadProjectType(projectType as PayloadProjcetTypes))
}