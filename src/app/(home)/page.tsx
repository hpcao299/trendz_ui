import PostItem from './PostItem';
import Stories from './Stories';

const Home = () => {
    return (
        <div className="pt-[22px] flex justify-center">
            <div className="pb-20 w-home-content">
                <div className="flex flex-col">
                    <div className="py-2 mt-4 mb-2">
                        <Stories />
                    </div>
                    <div className="pt-10 mx-auto w-home-feed">
                        <PostItem />
                        <PostItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
