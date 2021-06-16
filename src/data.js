//funciones relacionada a procesar la info, toda la funcionalidad para obtener y procesar y manipular datos como filter, sort//

export const leakedPoke = (globalPoke, type) => globalPoke.filter(item => {
    return item.globalPoke.type == globalPoke.type.includes(type);
});