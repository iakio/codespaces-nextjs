import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <Image
                src="/images/profile.jpg"
                width={144}
                height={144}></Image>
        </Layout>
    )
}