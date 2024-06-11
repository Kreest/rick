/// <reference path="types.ts">
/// <reference path="parser.ts">
/// <reference path="filter-old.ts">
/// <reference path="filter-compiled.ts">

namespace Filter {
    export enum FilterType {
        Old,
        Compiled,
    }

    export function filterAll(cards: Card[], searchstring: string, typ: FilterType) {
        searchstring = searchstring.replace(/&/g, "and");
        searchstring = expandAbbreviations(searchstring);
        switch (typ) {
            case FilterType.Old: throw new Error("Old filter not supported");
            case FilterType.Compiled:
                const ast = Parser.parseFilters(searchstring);
                if (ast == null) {
                    return cards;
                }
                const fn = Filter.Compiled.compile(ast);
                return fn(cards);
        }
    }

    function expandAbbreviations(s: string): string {
        let abbreviations = [
            ["t", "type"],
            ["n", "name"],
            ["c", "cost"],
            ["f", "flag"],
            ["p", "power"],
            ["g", "good"],
            ["e", "expansion"],
            ["exp", "expansion"],
        ];
        abbreviations.forEach((map) => {
            let re = new RegExp('\b' + map[0] + ":", "gi");
            console.log(re);
            s = s.replace(new RegExp("\\b" + map[0] + ":", "gi"), map[1] + ":");
        });
        return s;
    }
}
