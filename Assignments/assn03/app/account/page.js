import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";

import CreatePost from '@/components/create-post';
import PostList from '@/components/post-list';

export default async function AccountPage() {
    // const {
    //     session: { user }
    // } = await supabase.auth.getUser();
    const supabase = createServerComponentClient({ cookies });
    const session = await supabase.auth.getUser();
    const user = session?.data.user;
    return (
        <main>
            <h1>Account page</h1>
            {user ? (
                <div>
                    <h1>Hello, {user.email}</h1>
                </div>
            ) : (
                <div>
                    <h1>not authenticated</h1>
                </div>
            )}
            <CreatePost />
            <PostList />
        </main>
    );
}

