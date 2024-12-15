import { dataTeam } from "../../../data/OurTeamData";
import { CardOurTeamProfil } from "../../elements/CardOurTeamProfil";
import MaxLayout from "../MaxLayout";

/* eslint-disable react/prop-types */
export function OurTeamModal({ isOpen, closeModal }) {
    if (!isOpen) return null;
    return (
        <MaxLayout>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg xl:w-[55rem] xl:h-[40rem] p-6 relative">
                    <h2 className="text-xl font-bold mb-4">Kelompok SBP</h2>
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        ✖
                    </button>

                    <div className="flex flex-wrap justify-center gap-10">
                        {
                            dataTeam.map((mem, i) => (
                                <CardOurTeamProfil
                                    key={i}
                                    name={mem.name}
                                    npm={mem.npm}
                                    img={mem.img}
                                />
                            ))
                        }
                    </div>
                    {/* <div className="flex justify-end bg-green-500">
                    <button
                        onClick={closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Tutup
                    </button>
                </div> */}
                </div>
            </div>

        </MaxLayout>
    )
}