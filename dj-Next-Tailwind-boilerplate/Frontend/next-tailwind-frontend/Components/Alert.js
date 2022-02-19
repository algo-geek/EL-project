
export default function Alert({typeAlert, message}) {
    console.log(typeAlert, message);
    return (
        <>
            <div className="container mt-5">
                <div className="flex justify-center">
                    <div className={typeAlert=="error" ? "alert bg-blue1 p-3 rounded-[3px] text-white" : "alert bg-success p-3 rounded-[3px] text-white"}>

                        <p className='flex items-center text-2xl'>
                            <span className='mx-2 text-lg'>{message}</span>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}