'use client'
import './../../../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MyArgoCD from '/public/argoCD.svg'
import Mydocker from '/public/docker.svg'
import Mygitlab from '/public/gitlab.svg'
import MyKubernetes from '/public/Kubernetes.svg'
import Mypython from '/public/python.svg'
import Myredhat from '/public/redhat.svg'
import Myvmware from '/public/vmware.svg'
import Image from 'next/image';

export default function ColePage(){
    return(
<motion.div className="z-[50] w-full min-h-full flex flex-col flex-nowrap scroller chromescrollers overflow-y-scroll"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>

    <motion.div className="grid min-w-[95%] min-h-[30%] grid-cols-2 grid-rows-2 grid-flow-col justify-center items-center overflow-hidden gap-2 mt-2 mx-2">
        <div className="h-full w-full redBGhalfopacity self-center"></div>

        <div className="h-full w-full flex flex-col-reverse myBlackShade self-center"><div className="p-2 text-xs text-[rgba(200,200,200,1)] italic">Dec2022-Aug2023</div></div>
        
        <div className="h-full w-full flex flex-col-reverse myBlackShade place-items-end"><div className=" w-min text-2xl text-right p-2 right-0 text-[rgba(95,95,95,1)]">Cole Engineering</div></div>

        <div className="h-full w-full redBGhalfopacity self-center"></div>
    </motion.div>

  
    <motion.div className="box-border w-full grow flex myGreyShadeNoOp mt-2">
        <motion.div className="bg-transparent p-2 text-[rgba(26,26,26,1)] italic indent-1 text-lg font-semibold">
        Knowledge of Virtual Machines, kubernetes, programming, Git, and everything in-between was necessary to keep Cole Engineering's billion-dollar Cyber-range running.
        </motion.div>
    </motion.div>
    <motion.div className="box-border myBlackShade flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max justify-center m-8 text-xl font-thin">Responsibility Overview</span>
            <span className="flex indent-4 mb-8">Maintain hardware and software in a virtualized and containerized environment. Leverage existing skills and program documentation, provision bare metal installation of OSes/hypervisors, provisioning of storage, configuration of virtualized networking, deployment of containers, merging of CI-CD artifacts, implementation of security policies and STIGs in conformance with existing type-based ATO, and testing and validation of deployed solutions to ensure operability of all components.</span>
        </motion.div>
    </motion.div>
    <motion.div className="box-border myGreyShadeNoOp flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max whitespace-pre my-8 ">Project <span className="italic text-rose-900 font-bold">Highlight</span></span>
            <div className="flex flex-col mb-8">

                <div className="my-2 text-xl text-[rgba(26,26,26,1)]">Confluence (wiki) upgrade</div>
 
                <div className="my-2 font-semibold">Summary: Upgraded Confluence from a monolithic application running in a Virtual Machine, to a pod running in our Openshift (Kubernetes) cluster.</div>

                <div className="my-2 underline underline-offset-8">Pre-Maintenance window:</div>
 
                <div className="my-2 indent-4">Using my RHEL 7 machine, I SSH'd into an ansible box, then SSH'd to the sandbox and copied the images (Alpine, Postgres, and helper) along with the git bundle into my home directory. I then logged into the target gitlab and created the new repo. Next I SSH'd into the gitlab vm and raked in the git bundle (due to how we do HA storage for gitlab we can't use the GUI/API for this). Next I built the images with Docker and changed the tags to meet production spec. I then loaded it into Gitlab (our gitlab has a docker registry). After verifying the images are showing up in the Gui, I SSH'd into openshift and created a new project. Using the CLI and OC (OpenShift uses OC instead of Kubectl), I point it at the new repo, then went into the build template (similar to Jenkins file) to change the route from sandbox env to prod env; then built the apps. Afterwards, I logged into the RedHat directory server to configure O-auth and point the requests at the right user groups. I then logged into the new confluence instance to match the O-auth settings. Lastly, I point Argo CD to the new repo. </div>
 
                <div className="my-2 underline underline-offset-8">During Maintence window:</div>
                
                <div className="my-2 indent-4">I backed up the VM using V-Center's snapshot feature, logged into confluence, and stopped all changes. I then exported the "space" to the ansible machine, and imported it into the new confuence. I then logged into the directory server and swapped the old IP and CNAME records with the new ones. Lastly I coordinatined with the network team to update the Firewall, verified services, and updated service desk.</div>

                <div className="my-2 underline underline-offset-8">Issues Encountered along the way:</div>

                <div className="my-2 indent-4">Naming conventions, firewall issues, O-Auth mismatches, coordination with other teams, Gitlab repo storage not allowing API ussage, linux ownership issues </div>
            </div> 
        </motion.div>
    </motion.div>

    <motion.div className="box-border w-full min-h-[20%] myBlackShade">
        <div className="w-full">
            <div className="flex text-2xl font-bold text-[rgba(95,95,95,1)] items-center justify-center">Tools</div>
        </div>   
        <div className="myBlackShade">
            <div className="grid grid-cols-2 h-20vh sm:h-full w-full ">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="Python svg"
                                src={Mypython}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">Python</div>
            </div>
            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="ArgoCD svg"
                                src={MyArgoCD}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">ArgoCD</div>
            </div>
            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="Docker svg"
                                src={Mydocker}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">Docker</div>
            </div>

            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="Kubernetes svg"
                                src={MyKubernetes}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">Kubernetes</div>
            </div>

            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="gitlab svg"
                                src={Mygitlab}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">Gitlab</div>
            </div>

            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="redhat svg"
                                src={Myredhat}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">RedHat</div>
            </div>

            <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                <div className="flex myBlackShade relative">
                <Image className="absolute"
                                alt="vmware svg"
                                src={Myvmware}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
                </div>
                <div className="flex bg-rose-900 text-black items-center justify-center">VMware</div>
            </div>

        </div>
        
        
        
    </motion.div>


</motion.div>
    )
}