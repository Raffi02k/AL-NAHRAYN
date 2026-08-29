import AppLink from "../components/AppLink";

export default function NotFoundPage() {
  return <main className="not-found"><div><p className="eyebrow">404 · Sidan hittades inte</p><h1>Du har hamnat utanför menyn.</h1><AppLink className="button button-solid" href="/">Till startsidan</AppLink></div></main>;
}
