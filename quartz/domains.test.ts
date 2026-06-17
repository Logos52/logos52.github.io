import test, { describe } from "node:test"
import assert from "node:assert/strict"
import { slugifyWikiSubtree } from "./domains"

describe("slugifyWikiSubtree", () => {
  test("slugifies folder prefixes like Quartz build output", () => {
    assert.equal(slugifyWikiSubtree("wiki/Money"), "wiki/Money")
    assert.equal(slugifyWikiSubtree("wiki/Money/Money, Condensed"), "wiki/Money/Money,-Condensed")
    assert.equal(slugifyWikiSubtree("wiki/Language/Chinese"), "wiki/Language/Chinese")
    assert.equal(slugifyWikiSubtree("wiki/Self Management"), "wiki/Self-Management")
    assert.equal(
      slugifyWikiSubtree("wiki/Systems/AI & Agentic Systems"),
      "wiki/Systems/AI--and--Agentic-Systems",
    )
    assert.equal(slugifyWikiSubtree("wiki/Decision Making"), "wiki/Decision-Making")
  })
})